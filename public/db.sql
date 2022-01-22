CREATE TABLE events (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name varchar(55) NOT NULL,
    location varchar(55) NOT NULL,
    price_range INT NOT NULL check (price_range >= 1 and price_range <= 5)
);

INSERT INTO events (id, name, location, price_range) 
VALUES(1, 'Southbank', 'Brisbane', 2); 


ALTER TABLE events ADD COLUMN featured boolean; 

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    event_id BIGINT NOT NULL REFERENCES events(id),
    name VARCHAR(50) NOT NULL, 
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <= 5) NOT NULL
);

select * from events left join (select event_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by event_id) reviews on events.id = reviews.event_id;