import { Col, Row, Collapse } from "antd";
import React from "react";
import "./style.scss";
import { PlusOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

export const RoadMap = () => {
  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

  const data = [
    {
      value: "25%",
      status: "Sold",
      description:
        "We airdrop 25 FROSSSY at random to Frosssy holders - who have already at least 2 FROSSSY PUNKS.",
    },
    {
      value: "50%",
      status: "Sold",
      description:
        "Merch Drop! store just for FROSSSY - Get your very own FROSSSY Punk on a shirt, mug and more.",
    },
    {
      value: "65%",
      status: "Sold",
      description: "Gonna drop the Fross God animation cartoon",
    },
    {
      value: "75%",
      status: "Sold",
      description:
        "Donate Charity to our favorite Multipurpose Human Service Organizations.",
    },
    {
      value: "100%",
      status: "Sold",
      description: "Launch Sandbox metaverse Game!",
    },
  ];
  return (
    <>
      <Row className="road-map" id="discord">
        <div className="inner-container">
          <h1 className="font-face-gm">
            ROADMAP <span>PHASE 1</span>
          </h1>
          <Row gutter={17}>
            {data.map((d) => (
              <Col key={d.value} className="sold-card">
                <div className="card">
                  <h2>{d.value}</h2>
                  <h3>{d.status}</h3>
                  <span></span>
                  <p>{d.description}</p>
                </div>
              </Col>
            ))}
          </Row>

          <div className="faqs" id="faqs">
            <h1 className="font-face-gm">
              FROSS GOD FROSSSY <span>FAQS</span>
            </h1>
            <div>
              <Collapse
                ghost
                expandIconPosition="right"
                expandIcon={() => <PlusOutlined />}
                className="custom-collapse"
              >
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};
