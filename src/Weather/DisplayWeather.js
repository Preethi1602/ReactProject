import React, { useEffect, useState } from "react";
import weather from './weather1.jfif';
const DisplayWeather = () => {

    const [location, setlocation] = useState("");
    const [data, setData] = useState({})

    const weatherdata = (e) => {
        e.preventDefault();

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=84ad7f8255a7b3befd30c973b3859cea`)
            .then((response) => response.json())
            // .then((json) => json);
            .then((json) => {
                setData(json);
               // setlocation('')
               
            }
             )
          
            console.log(data)
    }
   

    const handleChange = (e) => {
        let value = e.target.value
        setlocation(...location,value)
    }
    
    let d = new Date();
    let date = d.getDate();
    let month = d.toLocaleString("default", { month: "long" })
    let day = d.toLocaleString("default", { weekday: "long" })
    let year = d.getFullYear()

    let time = d.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })

    return (
        <div className="DisplayWeather">
            <div>
                <div className="row justify-content-center">
                    <div className="col-3">
                        <div class="card   text-center border-0" style={{ marginTop: "40px" }}>
                            <img class="card-img" style={{ height: "550px" }} src={weather} alt="Card image" />
                            <div class="card-img-overlay">
                                <form>
                                    <div class="input-group mb-4 w-75 mx-auto">
                                        <input type="text" name="city" class="form-control" placeholder=" Enetr city" aria-label="location city"
                                            aria-describedby="basic-addon2" onChange={(e) => handleChange(e)} />
                                        <button type="submit" class="input-group-text" id="basic-addon2" onClick={(e) => weatherdata(e)}>Search</button>
                                    </div>
                                </form>
                                
                                {typeof data.main === "undefined" ? <div></div> :
                                    <div className="bg-dark bg-opacity-50 py-4 w-75 mx-auto" style={{ marginTop: "50px" }} >
                                        <h2 class="card-title" style={{ color: "white" }}>{data.name}</h2>
                                        <p class="card-text lead" style={{ color: "white" }}> {day},{month},{date},{year}
                                            <br></br>
                                            {time}</p>
                                        <hr />
                                        {/* <i className=""></i> */}
                                        <h1 className="fw-bolder mb-5" style={{ color: "white" }}>{(data.main.temp - 273.15).toFixed(2)} &deg;C</h1>
                                        <p className="lead fw-bolder mb-0" style={{ color: "white" }}>{data.weather[0].description}</p>
                                        <p className="lead" style={{ color: "white" }}>{(data.main.temp_min - 273.15).toFixed(2)} &deg;C |{(data.main.temp_max - 273.15).toFixed(2)} &deg;C</p>
                                    </div>}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default DisplayWeather;