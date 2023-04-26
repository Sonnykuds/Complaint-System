import { Button } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";

import FormLayout from "../Components/FormLayout";
const LoginPage = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const password = "password";
  const email = "test@mail.com";

  const handleLoginForm = (values) => {
    if (values.username === email && values.password === password) {
      navigate("/dashboard");
    } else {
    }
  };
  return (
    <FormLayout form={form} formFunction={handleLoginForm}>
      {
        <>
          <div className="flex justify-center">
            <Button type="primary" htmlType="sumbit" className=" w-full">
              Login
            </Button>
          </div>
          <div className="flex justify-between  italic">
            <a href="/register" className="text-blue-600">
              Register Now!
            </a>
            <a href="/forget" className=" text-red-600">
              Forget Password?
            </a>
          </div>
        </>
      }
    </FormLayout>
  );
};

export default LoginPage;
