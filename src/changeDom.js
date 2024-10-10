const domLocationArray = ["icon", "main", "area", "time"];
const domConditionsArray = ["icon", "conditions", "description"];
const domNumbersArray = ["temp", "tempmin", "tempmax", "sunset", "precipprob"];

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
    const domElement = document.getElementById(`current-${condition}`);
    switch (condition) {
      case "sunset":
        domElement.innerText = objTime(dayWeather[condition]);
        break;
      case "temp":
        domElement.innerText = degreesF(currentWeather[condition]);
        break;
      case "tempmin":
      case "tempmax":
        domElement.innerText = degreesF(dayWeather[condition]);
        break;
      case "precipprob":
        domElement.innerText = chanceOfPrecip(currentWeather[condition]);
        break;
      default:
        domElement.innerText = dayWeather[condition];
        break;
    }
  }
  for (let i = 0; i < domConditionsArray.length; i++) {
    const condition = domConditionsArray[i];
    const domElement = document.getElementById(
      `current-${domConditionsArray[i]}`
    );
    switch (condition) {
      case "description":
        domElement.innerText = dataObj.description;
        break;
      case "icon":
        // domElement.innerText = currentWeather[condition];
        domElement.innerText = "";
        const iconWrapper = new HtmlElement("div", domElement);
        const icon = new HtmlElement("img", iconWrapper.element, {
          src: `/Icons/color/${currentWeather[condition]}.svg`,
          class: "svg-icon",
        });

        break;
      default:
        domElement.innerText = currentWeather[condition];
        break;
    }
  }
}

function changeLocationOnQuery(obj) {
  const fullAddress = obj.address;
  const addressArray = fullAddress.split(" ");
  document.getElementById("location-main").innerText = addressArray[0];
  document.getElementById("location-area").innerText = addressArray[1];
  document.getElementById("location-time").innerText = objTime(
    obj.currentConditions.datetime
  );
}

function degreesF(num) {
  return `${num}°F`;
}
function objTime(miltime) {
  let milArray = miltime.split(":");
  let myInt = milArray[0] / 1;
  switch (true) {
    case myInt > 12:
      myInt += -12;
      myInt.toString();
      return `${myInt}:${milArray[1]} PM`;
      break;
    case myInt <= 12:
      return `${miltime} AM`;
      break;
    default:
      console.log("error objtime");
      break;
  }
  if (myInt >= 12) {
    myInt += -12;
    myInt.toString();
    return `${myInt}:${milArray[1]} PM`;
  }
}
function chanceOfPrecip(num) {
  return `${num}% chance of precipitation currently`;
}
