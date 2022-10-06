import React ,{useState,useEffect}from "react";
import { Space, Table, Col, Row } from 'antd';
import axios from "axios";


const List=()=>{
    const[data,setdata]=useState([])
    const[id,setid]=useState(2)
    useEffect(() => {
        fetchdata(1)
    }, [])
    const fetchdata=(postid)=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
        .then((response) => { setdata(response.data)
        setid({
            postId:postid
        })
    console.log(id)});
       
    }
    // console.log(data)
    const dataSource=data.map((data)=>{
        return{
            postId:data.postId,
            id:data.id,
            name:data.name,
            email:data.email,
            body:data.body 
        }
    })

    const columns = [
        // {
        //     title: 'PostId',
        //     dataIndex: 'postId',
        //     key: 'postId',
        // },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Body',
            dataIndex: 'body',
            key: 'body',
        }
    ];
    return(
        <div className="List">
            <h2 style={{marginTop:"10px",marginBottom:"1px",textAlign:"left",marginLeft:"150px",color:"blueviolet"}}>PostId : {id.postId}</h2>
             <Table dataSource={dataSource} columns={columns} pagination={{total:1000,onChange:(postid)=>{fetchdata(postid)}}}className="antd "style={{width:"80%",marginLeft:"150px"}}/>
            {/* <ReactPaginate /> */}
        </div>
    )
}
export default List;