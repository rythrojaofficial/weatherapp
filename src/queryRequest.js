import { VisualCrossingQuery } from "./queryObject.js";

export async function getWeather(apimethod, location) {
  console.log("clicked");
  const website =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/forecast?";
  let myLocation = "seattle, WA";
  // let time = now create from new date time
  // let endtime = 8 hours after
  let method = "next24hours&include=days%2Chours%2Ccurrent";
  const key = "RAEHHYGPKLFCAP835LPQWNMQ9";

  let myQuery =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/seattle%20wa/next24hours?unitGroup=us&include=days%2Chours%2Ccurrent&key=RAEHHYGPKLFCAP835LPQWNMQ9&contentType=json";

  const apiDataObj = new VisualCrossingQuery(method, myLocation);
  if (myQuery === "") {
    myQuery = `${website}aggregateHours=1&contentType=json&unitGroup=us&startDateTime=${time}&endDateTime=${endtime}${method}&?key=${key}&locations=${myLocation}`;
  }

  const response = await fetch(myQuery);
  const weatherDataObj = await response.json();
  return weatherDataObj;
}
