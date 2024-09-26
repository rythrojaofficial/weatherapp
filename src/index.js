// import _ from "lodash";
import "./style.css";
// import data from "./data/data.xml";
// import notes from "./data/data.csv";
// import Icon from "./images/icon.png";

// const element = document.createElement("div");

// Lodash, now imported by this script
// element.innerHTML = _.join(["Hello", "webpack"], " ");
// element.textContent = "indexjs normal";
// element.classList.add("hello");

// element.appendChild(myIcon);

// console.log(data);
// console.log(notes);
// document.querySelector("body").appendChild(element);

import { getWeather } from "./queryRequest.js";
let searchButton = document.getElementById("location-search-button");
searchButton.addEventListener("click", getWeather);
