import { Col, Row } from "antd";
import React from "react";
import "./style.scss";

export const ContentSlide = () => {
  return (
    <>
      <Row className="side-content">
        <Col span={6} className="slide-content-box">
          <img src="/assets/images/img5.png" alt="img5" />
        </Col>
        <Col span={6} className="slide-content-box">
          <img src="/assets/images/img6.png" alt="img5" />
        </Col>
        <Col span={6} className="slide-content-box">
          <img src="/assets/images/img7.png" alt="img5" />
        </Col>
        <Col span={6} className="slide-content-box">
          <img src="/assets/images/img8.png" alt="img5" />
        </Col>
      </Row>
    </>
  );
};
