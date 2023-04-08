import React, { useState } from "react";
import "../index.css";

import "./Login.css";
import pratiksha from "./Images/pratiksha.jpg";
import { IoNotificationsCircleSharp } from "react-icons/io5";
//import OrderDetails from "./OrderDetails";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  SyncOutlined,
  UnorderedListOutlined,
  AlipayOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainSlider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "Logout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "/order-details",
              icon: <UnorderedListOutlined className="fs-4" />,
              label: "Home",
              url: "/order-details",
            },
            {
              key: "update-details",
              icon: <UploadOutlined className="fs-4" />,
              label: "Update_Personal_Info",
              url: "/update-details",
            },
            {
              key: "payment-details",
              icon: <AlipayOutlined className="fs-4" />,
              label: "PaymentDetails",
              url:"/payment-details",
            },
            {
              key: "change-password",
              icon: <SyncOutlined className="fs-4" />,
              label: "Change_Password",
              url:"/change-password"
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-2 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-right">
            <div className="position-relatie">
              <IoNotificationsCircleSharp className="fs-3" />
            </div>
            <div className="d-flex gap-3 align-items-right">
              <div>
                <img width={36} height={36} src={pratiksha} alt="User" />
              </div>
              <div>
                <h5 className="mb-0">Transporter</h5>
                <p className="mb-0">pratiksha@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 600,
            background: colorBgContainer,
          }}
        >
          <h1 className="style">Welcome To LeaseWithEase</h1>
          
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainSlider;
