import { tuple } from "antd/es/_util/type";
import React, { useEffect, useState } from "react";

const Todolist = ({ todo, handlechange }) => {
    const [completedtodo, setcompletedtodo] = useState([]);

    // useEffect(()=>{
    //     todo.slice(0,10).map((todo)=>{
    //         if(todo.completed){
    //             let ctodo=completedtodo;
    //             ctodo.push(todo);
    //             setcompletedtodo(ctodo);
    //         }
    //     })
    // },[])

    const newtodo = (value, checkbox) => {
        let ctodo = [...completedtodo]
        if (checkbox === true) {
            //value.completed=true;
            ctodo.push(value);
            setcompletedtodo(ctodo);
        } else {
            let index = completedtodo.findIndex(check => check.id === value.id);
            // value.completed=false;
            setcompletedtodo(ctodo);
            if (index >= 0) {
                ctodo.splice(index, 1)
            }
        }
    }
    return (
        <div className="Todolist">
            <div className="row">
                <div className="col-6">
                    <table className="table table-bordered table-striped" style={{ width: "700px", marginLeft: "auto", marginRight: "auto", marginTop: "20px" }}>
                        <thead style={{ height: "40px", backgroundColor: "aqua" }}>
                            <th>User ID</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                        </thead>
                        <tbody style={{ backgroundColor: "azure" }}>
                            {
                                todo.slice(0, 10).map((todo) => {
                                    return (
                                        <tr className="table-bordered" >
                                            <td  >{todo.userId}</td>
                                            <td>{todo.id}</td>
                                            <td >{todo.title}</td>
                                            <td ><input type="checkbox" onChange={e => newtodo(todo, e.target.checked)} /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-6">
                    <div style={{ height: "40px", backgroundColor: "aqua", width: "600px", marginTop: "20px", paddingTop: "10px", fontWeight: "bolder" }}>Completed</div>

                    {completedtodo.map((todo) => {
                        return (
                            <div class="list-group-item" style={{ backgroundColor: "azure", width: "600px",paddingTop:"5px" }}>{todo.title}<br></br><br></br></div>
                        )
                    })}



                </div>
            </div>
        </div>
    )
}
export default Todolist;