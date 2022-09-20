import React from "react";
import "./App.css"
import { HashRouter, Link, Outlet, Route, Routes } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "lightpink", height: "70px" }}>
                <div style={{ marginLeft: "20px", fontSize: "30px", color:"blue",fontFamily:"sans-serif" }}>React App</div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto" style={{ marginLeft: "65%", fontSize: "20px",fontFamily:"sans-serif" }}>
                        <li class="nav-item">
                            <Link to="/" class="a">Home</Link>
                           
                        </li>
                        <li class="nav-item" style={{ marginLeft: "20px" }}>
                            <Link to="/crud" class="a">CRUD</Link>
                    
                        </li>
                        <li class="nav-item" style={{ marginLeft: "20px" }}>
                            <Link to="/JsonApp" class="a">Json App</Link>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "20px" }}>
                            <Link to="/WeatherApp" class="a">WeatherApp</Link>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "20px" }}>
                            <Link to="/ChartApp" class="a">Chart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <img src={picture}></img> */}
        </div>
    )
}
export default Header;