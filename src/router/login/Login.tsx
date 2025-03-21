import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import axios from "axios";

const API_URL = "https://furnishing.carwashing.uz/api/admin/auth/signin";

type FieldType = {
  email?: string;
  password?: string;
};



const Login: React.FC = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    axios
      .post(API_URL, values)
      .then(res => {
        console.log(res?.data?.data?.access_token);
        localStorage.setItem("access_token", res?.data?.data?.access_token);
      })
};


return (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="email"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>

   

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
} 


export default Login;
