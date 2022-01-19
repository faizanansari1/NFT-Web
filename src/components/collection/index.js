import { Button, Col, Row } from "antd";
import React from "react";
import "./style.scss";
export const Collection = () => {
  return (
    <>
      <div style={{ background: "#231047" }} id="about">
        <Row className="collection inner-container" gutter={10}>
          <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }}>
            <div className="left-collection">
              <h1 className="font-face-gm">FROSS GOD FROSSSY</h1>
              <h2 className="font-face-gm">PUNKS collection!</h2>
              <span>&nbsp;</span>
              <p>
                Welcome to the FROSS GOD FROSSSY PUNKS collection, there are 400
                characters in this collection. Each FROSSGOD FROSSSY PUNK is
                8-bit pixels and is hand created design from scratch. Each
                FROSSSY PUNK is uniquely different from one another, some with
                special powers to different rare accessories. Skunk Gang is the
                most coveted of the punks but ownership of any Frosssy Punks
                will grant you access to exclusive launches, airdrops, and
                certain limited merchandise.
              </p>
            </div>
          </Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            className="right-collection"
          >
            <img src="/assets/images/img9.png" alt="img9" />
            <Button className="font-face-gm">Charley Da Skunk</Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
