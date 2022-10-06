import React, { useEffect, useState } from "react";
import Todolist from "./Todolist";
import Header from "../Header";
import { HashRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import reacticon from 'C:/Users/Preethika/form-context/src/React-icon.png'


const JsonApp = () => {
    const [todo, settodo] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => settodo(json));
    }, [])


    return (
        <div className="JsonApp">
            {/* <Header /> */}
            <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "lightpink", height: "90px" }}>
                <img src={reacticon} width="60" height="50" class="d-inline-block align-top" style={{ marginLeft: "10px" }} alt="" />
                <div style={{ marginLeft: "5px", fontSize: "40px", color: "blue", fontFamily: "sans-serif" }}>React App</div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto" style={{ marginLeft: "75%", fontSize: "20px", fontFamily: "sans-serif" }}>
                        <li class="nav-item" >
                            <Link to="/JsonApp/TodoJson" class="a">TodoApp</Link>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "25px" }}>
                            <Link to="/JsonApp/Pagination" class="a"> Pagination</Link>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "25px" }}>
                            <Link to="/" class="a">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            {/* {todo ?<div>todo</div>: <div>error</div>} */}
            <Todolist todo={todo} />
        </div>
    )
}
export default JsonApp;