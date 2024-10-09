import { VisualCrossingQuery } from "./queryObject.js";

export async function getWeather(apimethod, location) {
  const website =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const generatedQuery = new VisualCrossingQuery(
    document.getElementById("location-search-bar").value
  );

  // let time = now create from new date time
  // let endtime = 8 hours after
  const key = "RAEHHYGPKLFCAP835LPQWNMQ9";
  // const apiDataObj = new VisualCrossingQuery(method, myLocation);
  const time = "today";
  const methods = `${time}?units=us`;
  const myQuery = `${website}/${generatedQuery.location}/${methods}&key=${key}`;

  const response = await fetch(myQuery);
  const weatherDataObj = await response.json();
  // const currentConditionsObj = weatherDataObj.currentConditions;
  // console.table(weatherDataObj);
  return weatherDataObj;
}
