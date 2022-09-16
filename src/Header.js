import React from "react";
import "./App.css"
import picture from './picture.jpg';
import { HashRouter, Link, Outlet, Route, Routes } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "lightpink", height: "70px" }}>
                <div style={{ marginLeft: "20px", fontSize: "30px", color: "black",fontFamily:"sans-serif" }}>Context Sample</div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto" style={{ marginLeft: "60%", fontSize: "20px",fontFamily:"sans-serif" }}>
                        <li class="nav-item">
                            <Link to="/" class="a">Home</Link>
                           
                        </li>
                        <li class="nav-item" style={{ marginLeft: "30px" }}>
                            <Link to="/FormApp" class="a">ContextForm</Link>
                    
                        </li>
                        <li class="nav-item" style={{ marginLeft: "30px" }}>
                            <Link to="/JsonApp" class="a">Json App</Link>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "30px" }}>
                            <Link to="/WeatherApp" class="a">WeatherApp</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <img src={picture}></img> */}
        </div>
    )
}
export default Header;