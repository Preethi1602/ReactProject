import React,{useContext} from "react";
import { Space, Table, Tag,Col, Row } from 'antd';
//import './App.css';
import { FormContext } from "antd/lib/form/context";
import {useForms, useAddForms } from "./FormContext";

const Display=()=>{

  // const details=useContext(FormContext)
  const {details,setdetails}=useForms()
  const {addData,onDelete,onEdit}=useAddForms();
  //console.log(details)
    const dataSource = details.map((val,index)=>{
      return{
        key:index+1,
        firstname: val.firstname,
        lastname:val.lastname,
        email:val.email,
        password:val.password,
        contact:val.contact
      }
    })
 
      
      const columns = [
        {
          title: 'S.No',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: 'Firstname',
          dataIndex: 'firstname',
          key: 'firstname',
        },
        {
          title: 'Lastname',
          dataIndex: 'lastname',
          key: 'lastname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
      //   {
      //     title: 'Password',
      //     dataIndex: 'password',
      //     key: 'password',
      // },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record, index) => (
              <Space size="middle">
               <button onClick={()=>{onEdit(_,record,index)}}>Edit</button>
               <button onClick={()=>{onDelete(_, record, index)}}>Delete</button>
              </Space>
            ),
          },
      ];
      
     return(
    <Row>
      <Col span={4}></Col>
      <Col span={20}>
    <Table dataSource={dataSource} columns={columns}  style={{
      
      marginTop:"30px",
      width:"80%"
      
    }}/>
    </Col>
    <Col span={4}></Col>
    </Row>

  )
}
export default Display;