import { Button, Input, Form, theme } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import FormLayout from "../Components/FormLayout";
const Register = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const handleRegisterForm = () => {
    navigate("/dashboard");
  };
  const formRules = {
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
    <FormLayout form={form} formFunction={handleRegisterForm}>
      {
        <>
          <Form.Item name="confirm" rules={formRules.confirm}>
            <Input.Password
              placeholder="Confirm Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <div className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className=" w-full"
              style={{ backgroundColor: colorPrimary }}
            >
              Register
            </Button>
          </div>
          <div className="flex justify-between  italic">
            <a href="/Login" cstyle={{ backgroundColor: colorPrimary }}>
              Already have an account?
            </a>
          </div>
        </>
      }
    </FormLayout>
  );
};

export default Register;
