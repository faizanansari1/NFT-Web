import { Col, Row } from "antd";
import React from "react";
import "./style.scss";

export const ContentSlide = () => {
  const slideData = [
    {
      img: <img src="/assets/images/img5.png" alt="img5" />,
    },
    {
      img: <img src="/assets/images/img6.png" alt="img5" />,
    },
    {
      img: <img src="/assets/images/img7.png" alt="img5" />,
    },
    {
      img: <img src="/assets/images/img8.png" alt="img5" />,
    },
  ];

  return (
    <>
      <Row className="slide-content">
        {slideData.map((i, index) => (
          <Col key={index} className="slide-content-box">
            {i.img}
          </Col>
        ))}
      </Row>
    </>
  );
};
