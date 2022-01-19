import { Col, Row, Menu } from "antd";
import React from "react";
import { Link } from "react-scroll";
import "./style.scss";

export const Footer = () => {
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
