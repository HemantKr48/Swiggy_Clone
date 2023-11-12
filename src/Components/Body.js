import { RestaurantCard } from "./RestaurantCard";
import { restaurants } from "../utils/restaurants";
import { useState, useEffect } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const response = await data.json();

    // optional chaining

    console.log(
      response
    );
  }

  function filterRestaurants() {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
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
      <div className="restaurant-cards">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} details={restaurant} />
        ))}
      </div>
    </>
  );
};
