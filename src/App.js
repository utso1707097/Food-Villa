// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking ->Remove unwanted code
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder

import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

/*
    *Header
        -Logo
        -Nav Items(right Side)
        -Cart
    *Body
        -Search bar
        -Restaurant list
        -RestaurantCard (many cards)
            -Image
            -Name
            -Rating
            -Cusines
    *Footer
        -Links
        -Copyright
    * 
     */

// const heading1 = React.createElement(
//   "h1",
//   { id: "header1", key: "h1" },
//   "Hello World"
// );

// //React.createElement => Object =>HTML(DOM)

// const heading2 = React.createElement(
//   "h2",
//   { id: "header2", key: "h2" },
//   "Namaste React"
// );

// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);
// //Whole HTML write in that way will be a mess

//JSX
// const heading = (
//   <h1 id="title" key="h1">
//     Namaste React
//   </h1>
// );
//You can skip the return statement
// const Title = () => (
//     <h1 id="title" key="h1">
//       Namaste React
//     </h1>
//   );

//another component

//JSX =>Babel => React.createElement => Object =>HTML(DOM)

//Component
//Functional component - NEW => A javascript function
//Calss Based Component - OLD

//React functional components are nothing but functions
//Name of a component starts with capital letter (Normal convention)
//If this is in 1 line then you don't need to put ()
//return na likhleo hoi arrow function things
//you can skip the return
//JSX can only have 1 parent
//div or JSX fragment <> </>  React.Fragment

// RestaurantList is JSON Data for displaying cards

//props na die {restaurant} object d

//JSX expression must have only one parent
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));

//root.render(heading);
//render functional component <ComponentName/>
root.render(<AppLayout />);
