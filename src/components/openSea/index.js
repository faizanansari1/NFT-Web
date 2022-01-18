import { Button, Row } from "antd";
import React from "react";
import "./style.scss";
export const OpenSea = () => {
  return (
    <>
      <Row className="open-sea">
        <Button type="primary">
          <span className="span">BUY ON</span>
          <img src="/assets/images/btn_img.png" alt="btn_img" />
          Open Sea
        </Button>
      </Row>
    </>
  );
};
