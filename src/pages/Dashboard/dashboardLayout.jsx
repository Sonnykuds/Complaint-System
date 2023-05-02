import { useState } from "react";
import { useNavigate, useOutlet } from "react-router-dom";

import { Avatar, Layout, Menu, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { complaints, MyContext } from "../../context/context";
import {
  AiOutlinePieChart,
  AiOutlineOrderedList,
  AiOutlineDatabase,
  AiOutlineHome,
  AiFillThunderbolt,
} from "react-icons/ai";
import { MdNotifications } from "react-icons/md";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorPrimaryBg },
  } = theme.useToken();
  const outlet = useOutlet();
  const navigate = useNavigate();
  const items = [
    getItem(<AiOutlinePieChart />, "Statistics", "/dashboard/statistics"),
    getItem(<AiOutlineDatabase />, "Complaints", "/dashboard/complaints"),
    getItem(<AiOutlineOrderedList />, "Departments", "sub2", [
      getItem(<AiOutlineHome />, "DPWH", "7"),
      getItem(<AiFillThunderbolt />, "SAMELCO", "8"),
      getItem(<AiOutlineHome />, "DEPED", "9"),
    ]),
  ];
  function getItem(icon, label, key, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const handleMenuclick = ({ key }) => {
    navigate(key);
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
      className="flex"
    >
      <Sider
        collapsed={collapsed}
        style={{ backgroundColor: colorPrimaryBg }}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="flex items-center w-full justify-center mt-5">
          <img
            src="/Calbayog_City_seal_2.svg.png"
            width={150}
            alt="Calbayog Logo"
          />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={handleMenuclick}
          mode="inline"
          style={{
            backgroundColor: colorPrimaryBg,
            paddingTop: "2.5rem",
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{ backgroundColor: colorPrimaryBg }}
          className=" flex items-center justify-end"
        >
          <div className="flex gap-5">
            <MdNotifications fontSize={25} />
            <Avatar src="/Calbayog_City_seal_2.svg.png" />
          </div>
        </Header>
        <Content>{outlet}</Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
