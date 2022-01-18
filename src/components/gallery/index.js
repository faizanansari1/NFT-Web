import { Col, Row } from "antd";
import React from "react";
import "./style.scss";

export const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="inner-container">
          <h2 id="twitter" className="font-face-gm">
            FROSS GOD FROSSSY <span>GALLERY</span>
          </h2>
          <Row>
            <Col span={6}>
              <div className="galley-box">
                <img src="/assets/images/img10.png" />
                <h3>Marii Jain</h3>
              </div>
            </Col>
            <Col span={6}>
              <div className="galley-box">
                <img src="/assets/images/img11.png" />
                <h3>AQ Man</h3>
              </div>
            </Col>

            <Col span={6}>
              <div className="galley-box">
                <img src="/assets/images/img12.png" />
                <h3>Puffy Da Puffer</h3>
              </div>
            </Col>
            <Col span={6}>
              <div className="galley-box">
                <img src="/assets/images/img17.png" />
                <h3>Alien OG</h3>
              </div>
            </Col>
          </Row>

          {/* / */}
          <Row style={{ marginTop: 30 }}>
            <Col span={6}>
              <div className="galley-box">
                <img src="/assets/images/img15.png" />
                <h3>Charley Da Skunk</h3>
              </div>
            </Col>
            <Col span={6}>
              <div className="galley-box">
                <img src="/assets/images/img3.png" />
                <h3>Marii Jain with Wings</h3>
              </div>
            </Col>

            <Col span={6}>
              <div className="galley-box">
                <img src="/assets/images/img16.png" />
                <h3>Frosssy McSkunk</h3>
              </div>
            </Col>
            <Col span={6}>
              <div className="galley-box">
                <img src="/assets/images/img13.png" />
                <h3>Sassy Trifecta</h3>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
