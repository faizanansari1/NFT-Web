import React from "react";
import "./style.scss";
import { Row, Col } from "antd";

export const HeadContent = () => {
  const contentData = [
    {
      img: <img src="/assets/images/img1.png" alt="img1" />,
    },
    {
      img: <img src="/assets/images/img2.png" alt="img2" />,
    },
    {
      img: <img src="/assets/images/img3.png" alt="img3" />,
    },
    {
      img: <img src="/assets/images/img4.png" alt="img4" />,
    },
  ];
  return (
    <>
      <Row className="head-content">
        {contentData.map((i, indx) => (
          <Col className="content-box" key={indx}>
            {i.img}
          </Col>
        ))}
      </Row>
    </>
  );
};
