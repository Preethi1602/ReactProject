import React, { useEffect, useState } from "react";
import Todolist from "./Todolist";
import Header from "../Header";

const JsonApp = () => {
    const [todo, settodo] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => settodo(json));
    }, [])


    return (
        <div className="JsonApp">
            <Header />
            {/* {todo ?<div>todo</div>: <div>error</div>} */}
            <Todolist todo={todo} />
        </div>
    )
}
export default JsonApp;