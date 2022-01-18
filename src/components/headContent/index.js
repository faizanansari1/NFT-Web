import React from "react";
import "./style.scss";
import { Row, Col } from "antd";

export const HeadContent = () => {
  return (
    <>
      <Row className="head-content">
        <Col span={6} className="content-box">
          <img src="/assets/images/img1.png" alt="img1" />
        </Col>

        <Col span={6} className="content-box">
          <img src="/assets/images/img2.png" alt="img2" />
        </Col>

        <Col span={6} className="content-box">
          <img src="/assets/images/img3.png" alt="img3" />
        </Col>

        <Col span={6} className="content-box">
          <img src="/assets/images/img4.png" alt="img4" />
        </Col>
      </Row>
    </>
  );
};
