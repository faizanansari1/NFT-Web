import { Col, Row, Menu } from "antd";
import React from "react";
import { Link } from "react-scroll";
import "./style.scss";

export const Footer = () => {
  const menu = (
    <Menu>
      <Menu.Divider />

      <Menu.Item key={1}>
        <Link to="opensea" spy={true} smooth={true}>
          Opensea
        </Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </Menu.Item>
      <Menu.Item key={3}>
        <Link to="twitter" spy={true} smooth={true}>
          Twitter
        </Link>
      </Menu.Item>
      <Menu.Item key={4}>
        <Link to="discord" spy={true} smooth={true}>
          Discord
        </Link>
      </Menu.Item>
      <Menu.Item key={5}>
        <Link to="future-plans" spy={true} smooth={true}>
          Futuer Plans
        </Link>
      </Menu.Item>
      <Menu.Item key={6}>
        <Link to="faqs" spy={true} smooth={true}>
          FAQs
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="footer">
        <Row className="inner-container">
          <Col xl={{ span: 18 }} lg={{ span: 16 }}>
            <div className="footer-nav">{menu}</div>
          </Col>
          <Col xl={{ span: 6 }} lg={{ span: 8 }} className="copy-right">
            <p>&copy; All Rights Reserved 2022</p>
          </Col>
        </Row>
      </div>
    </>
  );
};
