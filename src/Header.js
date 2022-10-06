import React from "react";
import reacticon from './React-icon.png'
import "./App.css"

import { HashRouter, Link, Outlet, Route, Routes } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "lightpink", height: "90px" }}>
                <img src={reacticon} width="60" height="50" class="d-inline-block align-top" style={{ marginLeft: "10px" }} alt="" />
                <div style={{ marginLeft: "5px", fontSize: "40px", color: "blue", fontFamily: "sans-serif" }}>React App</div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto" style={{ marginLeft: "60%", fontSize: "20px", fontFamily: "sans-serif" }}>
                        <li class="nav-item">
                            <Link to="/" class="a">Home</Link>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "25px" }}>
                            <Link to="/crud" class="a">CRUD</Link>
                        </li>
                        {/* <li class="nav-item" style={{ marginLeft: "25px" }}>
                            <Link to="/JsonApp" class="a">Json App</Link>
                        </li> */}
                        <li class="nav-item" style={{ marginLeft: "25px" }}>
                            <Link to="/JsonApp/TodoJson" class="a">Json App</Link>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "25px" }}>
                            <Link to="/WeatherApp" class="a">WeatherApp</Link>
                        </li>
                        {/* <li class="nav-item" style={{ marginLeft: "20px" }}>
                            <Link to="/ChartApp" class="a">Chart</Link>
                        </li> */}
                        <li class="nav-item" style={{ marginLeft: "25px" }}>
                            <Link to="/QuizApp" class="a">Quiz App</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <img src={picture}></img> */}
        </div>
    )
}
export default Header;