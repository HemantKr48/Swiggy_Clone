import { RestaurantCard } from "./RestaurantCard";
// import { restaurants } from "../utils/restaurants";
import { useState, useEffect } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";
import Shimmer from "./Shimmer";
import { useOnline } from "../utils/useOnline";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    console.log("How are you");
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const response = await data.json();

    // optional chaining

    console.log(response);
    console.log(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  const online=useOnline();
  if(!online){
    return <h1>Please check your Internet Connection</h1>
  }

  function filterRestaurants() {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
    console.log("filteredRestaurants", filteredRestaurants);
  }
  function filterTopRatedRestaurants(restaurants) {
    setFilteredRestaurants(restaurants);
  }
  return (
    <>
      <input
        className="relative"
        placeholder="Search"
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="button" onClick={filterRestaurants}>
        Search
      </button>
      <TopRatedRestaurants
        topRatedRestaurants={filterTopRatedRestaurants}
        filteredRestaurants={filteredRestaurants}
      />

      {/* // Conditional Rendering */}
      {filteredRestaurants.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-cards">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              details={restaurant.info}
            />
          ))}
        </div>
      )}
    </>
  );
};
