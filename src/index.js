import "./style.css";
import { getWeather } from "./queryRequest.js";
import { populateOptions, changeDomOnQuery } from "./changeDom.js";
import { parseWeather } from "./parseWeather.js";

populateOptions();
const searchButton = document.getElementById("location-search-button");
searchButton.addEventListener("click", async () => {
  getWeather().then((weatherObj) => {
    changeDomOnQuery(weatherObj);
  });
});
