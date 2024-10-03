const domLocationArray = ["icon", "main", "area", "time"];
const domConditionsArray = ["icon", "conditions"];
const domNumbersArray = ["temp", "feelslike", "precipprob"];

const domArrays = [domConditionsArray, domNumbersArray];

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
      { id: `current-${con}` },
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
      { id: `current-${num}` },
      `current-${num}`
    );
  });
}

export function changeDomOnQuery(dataObj) {
  for (let i = 0; i < domNumbersArray.length; i++) {
    const condition = domNumbersArray[i];
    // console.log(dataObj[condition]);
    const domElement = document.getElementById(`current-${domNumbersArray[i]}`);
    domElement.innerText = dataObj[condition];
  }
  for (let i = 0; i < domConditionsArray.length; i++) {
    const condition = domConditionsArray[i];
    // console.log(dataObj[condition]);
    const domElement = document.getElementById(
      `current-${domConditionsArray[i]}`
    );
    domElement.innerText = dataObj[condition];
  }
}
