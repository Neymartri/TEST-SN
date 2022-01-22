import React from 'react'
// components that will hold individual star_rating
const StarRating = ({rating}) => {
    const stars = [];
   // for loop to iterate over stars from 1 to 5 
   for (let i = 1; i <= 5; i++){
       if (i <= rating) {
           stars.push(<i key ={i} className = "fas fa-star"></i>); 
    //if rating is at decimal, it will raise to the highest whole value while checking the if its decimal
       } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i key ={i} className="fas fa-star-half-alt"></i>)
       }else {
           stars.push(<i key ={i} className= "far fa-star"></i>)
       } 
   }
    return (
       <>
        {stars}
       </>
    )
};

export default StarRating;
