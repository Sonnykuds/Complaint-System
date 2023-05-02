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
    <div className="h-screen  flex justify-center items-center">
      <Result
        icon={
          <img
            src="/404-error.png"
            alt="Page not foud!"
            width={400}
            className=" w-full"
          />
        }
        title="Oops! This page could not be found."
        subTitle="The page you are looking for might have removed, had its name changed,or its temporarily unavailable"
        extra={
          <Space>
            <Button
              size="large"
              type="primary"
              onClick={handleGoBackButtonClick}
              className=" bg-blue-500"
            >
              Go Back
            </Button>
            <Button
              size="large"
              type="primary"
              className=" bg-blue-500"
              onClick={handleHompageButtonClick}
            >
              Homepage
            </Button>
          </Space>
        }
      />
    </div>
  );
};

export default NotFoundPage;
