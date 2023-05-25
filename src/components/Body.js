import RestaurantCard from "./RestaurantCard.js";
import { restaurantList } from "../config.js";
import { useState } from "react";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt)
  );
  console.log(restaurants);
  return filterData;
}

const Body = () => {
  //searchTxt is a local state variable
  //Hooks are nothing but function
  const [searchInput, setSearchInput] = useState(""); //default value to useState() //use to create state local variable // this function return an array
  //returns = [variable name, function to update the variable]
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to update the dataL
            const data = filterData(searchInput, restaurantList);
            //update the state -restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
        {/*<h1>{searchInput}</h1> //Two way binding */}
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
