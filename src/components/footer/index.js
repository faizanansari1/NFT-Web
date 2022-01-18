import { Col, Row, Menu } from "antd";
import React from "react";
import "./style.scss";

export const Footer = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#">
          Opensea
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#">
          About
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#">
          Twitter
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#">
          Discord
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#">
          Futuer Plans
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#">
          FAQs
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="footer">
        <Row className="inner-container">
          <Col span={18}>
            <div className="nav">{menu}</div>
          </Col>
          <Col span={6} className="copy-right">
            <p>&copy; All Rights Reserved 2022</p>
          </Col>
        </Row>
      </div>
    </>
  );
};
