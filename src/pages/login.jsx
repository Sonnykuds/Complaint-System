import { Button, message, theme } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";

import FormLayout from "../Components/FormLayout";
const LoginPage = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const {
    token: { colorPrimary, colorErrorActive, colorInfoActive },
  } = theme.useToken();
  const password = "password";
  const email = "test@mail.com";
  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Invalid Credentials!",
    });
  };
  const handleLoginForm = (values) => {
    if (values.username === email && values.password === password) {
      navigate("/dashboard");
    } else {
      error();
    }
  };
  return (
    <FormLayout form={form} formFunction={handleLoginForm}>
      {
        <>
          {contextHolder}
          <div className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className=" w-full"
              style={{ backgroundColor: colorPrimary }}
            >
              Login
            </Button>
          </div>
          <div className="flex justify-between  italic">
            <a href="/register" style={{ color: colorInfoActive }}>
              Register Now!
            </a>
            <a href="/forget" style={{ color: colorErrorActive }}>
              Forget Password?
            </a>
          </div>
        </>
      }
    </FormLayout>
  );
};

export default LoginPage;
