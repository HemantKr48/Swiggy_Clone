// import { restaurants } from "../utils/restaurants";
import { useState } from "react";

const TopRatedRestaurants = (props) => {
  //const [TopRestaurants, setTopRestaurants] = useState(restaurants);
  function getToprestaurants() {
    const Toprestaurantsdata = props.filteredRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
   // setTopRestaurants(Toprestaurantsdata);
   props.topRatedRestaurants(Toprestaurantsdata);
    console.log("Toprestaurants", Toprestaurantsdata);
  }
  return (
    <button type="button" onClick={getToprestaurants}>
      TopRatedRestaurants
    </button>
  );
};

export default TopRatedRestaurants;
