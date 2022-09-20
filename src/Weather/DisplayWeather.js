import React, { useState } from "react";
import axios from "axios";
import sun from './sun.jpg'
import rain from './rain.jpg'
import cloud from './clouds.jpg'
import Chart from "react-apexcharts";

const DisplayWeather = () => {

    const [location, setlocation] = useState({ city: "" });
    const [data, setData] = useState({})
    const [cname, setcname] = useState([])
    const [ctemp,setctemp]=useState([])

    const weatherdata = (e) => {
        e.preventDefault();

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=84ad7f8255a7b3befd30c973b3859cea`)
            .then((response) => {
                // console.log(response.data)

                setData({
                    name: response.data.name,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min
                })
                setcname([...cname, response.data.name])
                console.log(cname)

                setctemp([...ctemp,(response.data.main.temp-273.15).toFixed(2)])
                console.log(ctemp)

                console.log(data)
                setlocation({ city: "" })
            })
        // .catch(e => {
        //     alert(e);
        // })

    }


    const handleChange = (e) => {
        let value = e.target.value
        setlocation({ ...location, city: value })
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
            <div className=" justify-content-center">

                <form style={{ marginTop: "20px", width: "500px", marginLeft: "35%" }}>
                    <div class="input-group mb-4 w-75 mx-auto">
                        <input type="text" name="city" class="form-control" placeholder=" Enetr city" aria-label="location city"
                            aria-describedby="basic-addon2" value={location.city} onChange={(e) => handleChange(e)} />
                        <button type="submit" class="input-group-text" id="basic-addon2" onClick={(e) => weatherdata(e)}>Search</button>
                    </div>
                </form>

                {typeof data.temp !== "undefined" ?
                    <div className="row">
                        <div className="col-5" style={{ marginLeft: "200px" }}>
                            <div class="card   text-center border-0" style={{ marginTop: "20px", width: "300px" }}>

                                <img class="card-img" style={{ height: "500px" }} src={(data.temp - 273.15) < 19 ? (rain) : ((data.temp - 273.15) < 22) ? (cloud) : (sun)} alt="Card image" />

                                <div class="card-img-overlay">
                                    <div className="bg-dark bg-opacity-50 py-4 w-75 mx-auto" style={{ marginTop: "50px" }} >
                                        <h2 class="card-title" style={{ color: "white" }}>{data.name}</h2>
                                        <p class="card-text lead" style={{ color: "white" }}> {day},{month},{date},{year}
                                            <br></br>
                                            {time}</p>
                                        <hr />
                                        <h1 className="fw-bolder mb-5" style={{ color: "white" }}>{(data.temp - 273.15).toFixed(2)}&deg;C</h1>
                                        <p className="lead fw-bolder mb-0" style={{ color: "white" }}>Min & Max</p>
                                        <p className="lead" style={{ color: "white" }}>{(data.temp_min - 273.15).toFixed(2)} &deg;C |{(data.temp_max - 273.15).toFixed(2)} &deg;C</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <Chart
                                type="bar"
                                height={350}
                                style={{
                                    marginTop: "50px"
                                }}
                                options={
                                    {
                                        chart: {
                                            height: 350,
                                            type: 'line',
                                            stacked: true,
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'straight'
                                        },
                                        title: {
                                            text: 'Temperature difference based on city',
                                            align: 'left'
                                        },
                                        grid: {
                                            row: {
                                                colors: ['#f3f3f3', 'transparent'],
                                                opacity: 0.5
                                            },
                                        },
                                        xaxis: {
                                            categories: cname,
                                            title: {
                                                text: "City"
                                            }
                                        },
                                        yaxis: {
                                            title: {
                                                text: "Temperature"
                                            }
                                        }
                                    }
                                }
                                series={[
                                    {
                                        name: "Temperature",
                                        data:ctemp
                                    },
    
                                ]} />
                        </div>
                    </div> : ('')
                }




            </div>

        </div>

    )
}
export default DisplayWeather;