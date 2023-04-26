// third party libraries
import { Button, Result, Space } from "antd";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  // data
  // const { userRole } = useAuth();
  const navigate = useNavigate();

  // functions
  const handleGoBackButtonClick = () => {
    navigate(-1);
  };
  const handleHompageButtonClick = () => {
    navigate("/dashboard"); // user role here
  };
  return (
    <Space className="h-screen w-screen flex justify-center items-center">
      <Result
        icon={<img src="/404-error.png" alt="Page not foud!" />}
        title="Oops! This page could not be found."
        subTitle="The page you are looking for might have removed, had its name changed,or its temporarily unavailable"
        extra={
          <Space>
            <Button
              size="large"
              type="primary"
              onClick={handleGoBackButtonClick}
            >
              Go Back
            </Button>
            <Button size="large" type="text" onClick={handleHompageButtonClick}>
              Homepage
            </Button>
          </Space>
        }
      />
    </Space>
  );
};

export default NotFoundPage;
