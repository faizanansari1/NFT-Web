import React from "react";
import { PageHeader, Row, Col, Menu } from "antd";
import "./style.scss";
import { Link } from "react-scroll";

export const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="opensea" spy={true} smooth={true}>
          <a rel="noopener noreferrer" href="#">
            Opensea
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="about" spy={true} smooth={true}>
          <a rel="noopener noreferrer" href="#">
            About
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="twitter" spy={true} smooth={true}>
          <a rel="noopener noreferrer" href="#">
            Twitter
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="discord" spy={true} smooth={true}>
          <a rel="noopener noreferrer" href="#">
            Discord
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="future-plans" spy={true} smooth={true}>
          <a rel="noopener noreferrer" href="#">
            Futuer Plans
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="faqs" spy={true} smooth={true}>
          <a rel="noopener noreferrer" href="#">
            FAQs
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Row className="main-container" style={{ background: "#1b0f23" }}>
        <Col span={6}>
          <div className="header">
            <img src="/assets/images/logo.png" alt="logo" />
            <p>FROSS GOD FROSSY </p>
          </div>
        </Col>
        <Col span={18}>
          <div className="main-nav">{menu}</div>
        </Col>
      </Row>
    </>
  );
};
