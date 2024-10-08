import { VisualCrossingQuery } from "./queryObject.js";

export async function getWeather(apimethod, location) {
  console.log("clicked");
  const website =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  let myLocation = {
    latAndLong: "47.79077581050766, -122.33693945020796",
    address: "Edmonds, WA",
  };

  // let time = now create from new date time
  // let endtime = 8 hours after
  const key = "RAEHHYGPKLFCAP835LPQWNMQ9";
  // const apiDataObj = new VisualCrossingQuery(method, myLocation);
  const time = "today";
  const methods = `${time}?units=us`;
  const myQuery = `${website}/${myLocation.address}/${methods}&key=${key}`;

  const response = await fetch(myQuery);
  const weatherDataObj = await response.json();
  // const currentConditionsObj = weatherDataObj.currentConditions;
  console.table(weatherDataObj);
  return weatherDataObj;
}
