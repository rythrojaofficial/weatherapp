const domLocationArray = ["icon", "main", "area", "time"];
const domConditionsArray = ["icon", "conditions", "description"];
const domNumbersArray = ["temp", "tempmin", "tempmax", "sunset", "precipprob"];

const domArrays = [domConditionsArray, domNumbersArray];

import { cond } from "lodash";
import { HtmlElement } from "./htmlElement.js";
export function populateOptions() {
  domConditionsArray.forEach((con) => {
    let parent = document.getElementById("weather-forecast");
    let conditionLabel = new HtmlElement(
      "div",
      parent,
      { class: "conditions-label" },
      con
    );
    let populateCondition = new HtmlElement(
      "div",
      parent,
      { class: "current-display", id: `current-${con}` },
      `current-${con}`
    );
  });

  domNumbersArray.forEach((num) => {
    let parent = document.getElementById("weather-numbers");
    let conditionLabel = new HtmlElement(
      "div",
      parent,
      { class: "conditions-label" },
      num
    );
    let populateNumber = new HtmlElement(
      "div",
      parent,
      { class: "current-display", id: `current-${num}` },
      `current-${num}`
    );
  });
}

export function changeDomOnQuery(dataObj) {
  changeLocationOnQuery(dataObj);
  const dayWeather = dataObj.days[0];
  const currentWeather = dataObj.currentConditions;

  for (let i = 0; i < domNumbersArray.length; i++) {
    const condition = domNumbersArray[i];
    console.log({
      currentWeather: currentWeather[condition],
      dayWeather: dayWeather[condition],
    });
    const domElement = document.getElementById(`current-${condition}`);
    switch (condition) {
      case "temp":
      case "precipprob":
        domElement.innerText = currentWeather[condition];
        break;
      default:
        domElement.innerText = dayWeather[condition];
        break;
    }
  }
  for (let i = 0; i < domConditionsArray.length; i++) {
    const condition = domConditionsArray[i];
    // console.log(dataObj[condition]);
    const domElement = document.getElementById(
      `current-${domConditionsArray[i]}`
    );
    switch (condition) {
      case "description":
        domElement.innerText = dataObj.description;
        break;
      default:
        domElement.innerText = currentWeather[condition];
        break;
    }
    // if (domConditionsArray[i] === "description") {
    //   domElement.innerText = dataObj.description;
    // } else {
    //   domElement.innerText = currentWeather[condition];
    //   // console.log(currentWeather[condition]);
    //   break;
    // }
  }
}

function changeLocationOnQuery(obj) {
  const fullAddress = obj.address;
  const addressArray = fullAddress.split(" ");
  // console.log(addressArray[0]);
  document.getElementById("location-main").innerText = addressArray[0];
  document.getElementById("location-sub").innerText = addressArray[1];
}
