import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
//import './App.css';
import { Button, Checkbox, Form, Card, Input, Row, Col } from 'antd';
import { useForms, useAddForms } from'./FormContext'
//import { FormContext,FormAddContext } from "antd/lib/form/context";


const Forms = () => {
  const [form] = Form.useForm();

  const { details, setdetails, Edit } = useForms();
  const { addData, onDelete, onEdit, editData } = useAddForms();
  const [btn, setBtn] = useState(false)
  useEffect(() => {
    const handleChange = () => {
      form.setFieldsValue({
        firstname: Edit.firstname,
        lastname: Edit.lastname,
        email: Edit.email,
        password: Edit.password,
        contact: Edit.contact
      });

    }
    handleChange()
    console.log(Edit.key);
    Edit.length !== 0 ? setBtn(true) : setBtn(false)
  }, [Edit]);

  const onFinish = (values) => {
    console.log(values)
    if (btn == true) {  
      editData(values);
    } else {
      addData(values);
    }
    form.resetFields();
    setBtn(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onReset = () => {
    form.resetFields();
    setBtn(false);
  };

  return (
    <Row>
      <Col span={7}></Col>
      <Col span={10}>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Registration Form"
            bordered={true}
            style={{
              backgroundColor: "lightblue",
              marginTop: "10px",

            }}
          >
            <div className="Form">
              <Form form={form} name="control-hooks"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Firstname"
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your firstname!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Lastname"
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your lastname!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Email!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Contact"
                  name="contact"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your contact!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 8,
                  }}
                >
                  
                  <Button type="primary" htmlType="submit" hidden={btn === true} style={{color:"white",backgroundColor:"green",borderColor:"green"}} >
                    Submit
                  </Button>
                  <Button type="primary" htmlType="submit" hidden={btn === false} style={{color:"white",backgroundColor:"blue",borderColor:"blue"}}>
                    Update
                  </Button>
                  <Button htmlType="button" onClick={onReset}
                    style={{
                      marginLeft: "10px",
                    }}>
                    Reset
                  </Button>

                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
      </Col>
      <Col span={7}></Col>
    </Row>
  );
};
export default Forms;