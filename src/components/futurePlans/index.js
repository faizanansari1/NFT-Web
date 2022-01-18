import { Col, Row, Button } from "antd";
import React from "react";
import "./style.scss";
export const FuturePlans = () => {
  return (
    <>
      <div
        style={{ backgroundImage: 'url("/assets/images/pyx.gif")' }}
        id="future-plans"
      >
        <Row className="future inner-container" gutter={10}>
          <Col span={12} className="right-future">
            <img src="/assets/images/img17.png" alt="img17" />
          </Col>
          <Col span={12}>
            <div className="left-future">
              <h1>FUTURE PLANS</h1>
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
              <div className="social-buttons">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<img src="/assets/images/twitter_icon.png" />}
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<img src="/assets/images/game_icon.png" />}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
