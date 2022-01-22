// set environment variable and export express
require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
//Import database from PostgreSQL
const db = require('./db')

const app = express();

app.use(express.json()) //request body
app.use(cors());
// middleware for route handling via morgan 
 app.use(express.json());

// Register and Login Routes 

app.use("/auth", require("./routes/userAuth"))

// Get all events route via async
app.get("/api/v1/events", async (req, res) => {
        try {
    const results = await db.query("select * from events;");
// Get api call of all events, review counts and avr ratings
    const eventRatingData = await db.query (
        "select * from events left join (select event_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by event_id) reviews on events.id = reviews.event_id;"
    );

     res.status(200).json({
        status: "success",
        results: eventRatingData.rows.length,
        data: {
            events: eventRatingData.rows,
        }, 
    });
        } catch (err) {
            console.log(err);
        }
    
});

//Get an Event via parameterized query - Route handler to handle both events and reviews
app.get("/api/v1/events/:id", async (req, res) => {
    console.log(req.params.id);

    try{
        const event = await db.query(
            "select * from events left join (select event_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by event_id) reviews on events.id = reviews.event_id where id =$1;", 
            [req.params.id,
            ]);
//Create an api call to retrieve data for the reiews 
        const reviews = await db.query(
            "select * from reviews where event_id = $1", [req.params.id,
             ]);
      
    res.status(200).json({
        status: "success", 
        data: {
            event: event.rows[0],
            reviews: reviews.rows
        },
    });
    } catch (err) {
        console.log(err);
    }
}); 

//Create an Event
app.post("/api/v1/events", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO events (name, location, price_range) values ($1, $2, $3) returning *", 
        [req.body.name, req.body.location, req.body.price_range]);

        res.status(201).json({
            status: "success", 
            data: {
                event: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err)
    }

    
});

// Update an Event
app.put("/api/v1/events/:id", async (req, res) => {

    try{
        const results = await db.query("UPDATE events SET name = $1, location = $2, price_range = $3 where id = $4 returning *", 
        [req.body.name, req.body.location, req.body.price_range, req.params.id]);

        res.status(200).json({
            status: "success", 
            data: {
                event: results.rows[0],
            },
        });

    }catch (err) {
        console.log(err)
    }

    console.log(req.params.id);
    console.log(req.body)

    
});

// Delete an event 
app.delete("/api/v1/events/:id", async (req, res) => {

    try{
        const results = await db.query("DELETE FROM events where id = $1", 
        [req.params.id]); 
    
        res.status(204).json({
            status: "success",
        });
        
    } catch (err) {
        console.log(err)
    }
   
})

// add Review backend express route - to add review to db 
app.post("/api/v1/events/:id/addReview", async (req, res) => {

    try {
        const newReview = await db.query("INSERT INTO reviews (event_id, name, review, rating) VALUES ($1, $2, $3, $4) returning *;", 
        [req.params.id, req.body.name, req.body.review, req.body.rating])
        res.status(201).json({
            status: 'success',
            data: { 
                review: newReview.rows[0]
            }
        })

    } catch(err) {
        console.log(err)
    }


});
//create sever listener
const port = process.env.PORT || 3005; 
app.listen(port, ()=> {
    console.log(`server is running and listening on port ${port}`);
});

