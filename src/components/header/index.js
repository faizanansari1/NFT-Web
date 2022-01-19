import React, { useState } from "react";
import { PageHeader, Row, Col, Menu, Drawer, Button } from "antd";
import "./style.scss";
import { Link } from "react-scroll";
import { MenuFoldOutlined } from "@ant-design/icons";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="opensea" spy={true} smooth={true}>
          Opensea
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="twitter" spy={true} smooth={true}>
          Twitter
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="discord" spy={true} smooth={true}>
          Discord
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="future-plans" spy={true} smooth={true}>
          Futuer Plans
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="faqs" spy={true} smooth={true}>
          FAQs
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Row className="main-container main-header-row">
        <Col xl={{ span: 6 }}>
          <div className="header">
            <img src="/assets/images/logo.png" alt="logo" />
            <p>FROSS GOD FROSSY </p>
          </div>
        </Col>
        <Col xl={{ span: 18 }} className="hide-nav">
          <div className="main-nav">{menu}</div>
        </Col>
        <div className="show-mobile">
          <Button type="primary" onClick={showDrawer} className="menu-btn">
            <MenuFoldOutlined />
          </Button>
          <Drawer
            placement="right"
            onClose={onClose}
            visible={visible}
            className="mobile-nav"
          >
            {menu}
          </Drawer>
        </div>
      </Row>
    </>
  );
};
