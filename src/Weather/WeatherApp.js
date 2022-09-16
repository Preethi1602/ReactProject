import React from "react";
import Header from "../Header";
import DisplayWeather from "./DisplayWeather";
const WeatherApp=()=>{
    return(
        <div className="WeatherApp">
            <Header/>
            <DisplayWeather/>
        </div>
    )
}
export default WeatherApp;