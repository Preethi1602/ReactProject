import React from "react";
import "./App.css"
import { HashRouter, Link, Outlet, Route, Routes } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "lightpink", height: "70px" }}>
                <div style={{ marginLeft: "20px", fontSize: "30px", color: "black" }}>Context Sample</div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto" style={{ marginLeft: "70%", fontSize: "20px" }}>
                        <li class="nav-item">
                            {/* <Link to="/">Home</Link> */}
                            {/* <a class="nav-link" href="#">Home</a> */}
                        </li>
                        <li class="nav-item" style={{ marginLeft: "40px" }}>
                            {/* <Link to="/App">Form</Link> */}
                            {/* <a class="nav-link" href="#">Form</a> */}
                        </li>
                        <li class="nav-item" style={{ marginLeft: "40px" }}>
                            {/* <a class="nav-link" href="#">Json App</a> */}
                        </li>
                    </ul>
                </div>
            </nav>
            <img src="pic.jpg"></img>
        </div>
    )
}
export default Header;