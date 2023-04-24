import { Button, Card, Form, Input, notification, Alert } from "antd";
import FormItem from "antd/es/form/FormItem";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const password = "password";
  const email = "test@mail.com";
  const [notificationIcon, notificationHolder] = notification.useNotification();
  const navigate = useNavigate();
  const openNotification = (alert) => {
    notificationIcon.open({
      description: alert,
      duration: 5,
      className: " p-0",
      style: { backgroundColor: "rgba(255, 99, 71,0)" },
    });
  };
  const handleOnFinish = (values) => {
    if (values.username === email && values.password === password) {
      openNotification(
        <Alert
          message="Login Successful!"
          type="success"
          showIcon
          className=" border-3"
        />
      );
      navigate("/dashboard");
    } else {
      openNotification(
        <Alert
          message="Invalid Credentials!"
          type="error"
          showIcon
          className=" border-3"
        />
      );
    }
  };
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
  };
  return (
    <Card className=" md:w-1/4">
      {notificationHolder}
      <Form onFinish={handleOnFinish}>
        <FormItem name="username" rules={formRules.username}>
          <Input
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </FormItem>
        <FormItem name="password" rules={formRules.password}>
          <Input.Password
            placeholder="Password"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </FormItem>
        <FormItem>
          <div className="flex justify-center">
            <Button type="primary" htmlType="sumbit" className=" w-full">
              Login
            </Button>
          </div>
        </FormItem>
        <FormItem>
          <div className="flex justify-between  italic">
            <a href="/register" className="text-blue-600">
              Register Now!
            </a>
            <a href="/forget" className=" text-red-600">
              Forget Password?
            </a>
          </div>
        </FormItem>
      </Form>
    </Card>
  );
};

export default LoginPage;
