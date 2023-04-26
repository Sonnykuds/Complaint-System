import { Card, Form, Input } from "antd";

import { LockOutlined, UserOutlined } from "@ant-design/icons";

const FormLayout = ({ children, form, formFunction }) => {
  const formRules = {
    username: [
      {
        required: true,
        message: "Please input your email",
      },
      {
        type: "email",
        message: "Email is not valid",
      },
    ],
    password: [
      {
        required: true,
        message: "Please input your Password!",
      },
    ],
    confirm: [
      {
        required: true,
        message: "Please confirm your password!",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("The two passwords that you entered do not match!")
          );
        },
      }),
    ],
  };
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <Card className=" md:w-1/4">
        <Form onFinish={formFunction} form={form}>
          <Form.Item name="username" rules={formRules.username}>
            <Input
              placeholder="Username"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item name="password" rules={formRules.password}>
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          {children}
        </Form>
      </Card>
    </div>
  );
};

export default FormLayout;
