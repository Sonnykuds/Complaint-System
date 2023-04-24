import { useState } from "react";

import { Layout, Menu, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import {
  AiOutlinePieChart,
  AiOutlineOrderedList,
  AiOutlineDatabase,
  AiOutlineWarning,
  AiOutlineCheckCircle,
  AiOutlineHourglass,
  AiOutlineRedo,
  AiOutlineQuestion,
  AiOutlineHome,
  AiFillThunderbolt,
} from "react-icons/ai";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorPrimaryBg },
  } = theme.useToken();
  const items = [
    getItem(<AiOutlinePieChart />, "Statistics", "/dashboardPage"),
    getItem(<AiOutlineDatabase />, "Complaints", "sub1", [
      getItem(<AiOutlineHourglass />, "Pending", "2"),
      getItem(<AiOutlineCheckCircle />, "Solve", "3"),
      getItem(<AiOutlineRedo />, "Ongoing", "4"),
      getItem(<AiOutlineWarning />, "Abusive", "5"),
      getItem(<AiOutlineQuestion />, "Not Applicable", "6"),
    ]),
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
          <img src="/Calbayog_City_seal_2.svg.png" width={150} />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          items={items}
          mode="inline"
          style={{
            backgroundColor: colorPrimaryBg,
            paddingTop: "2.5rem",
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: colorPrimaryBg }}></Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
