import React from "react";
import ReactDOM from "react-dom";

//React Element =====> JS Object ======>HTML
const header=React.createElement('h1',{},'Hello World Using react');

//JSX ------>HTML like syntax or XML like syntax
//Babel -----> Javascript compiler or transpiler
//JSX -------> React Element ------> JS Object ----->HTML

// React Components
// JS Function which returns JSX(React Element)

console.log("header",header);
const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(header);