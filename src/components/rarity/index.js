import { Col, Row } from "antd";
import React from "react";
import "./style.scss";
export const Rarity = () => {
  const description = [
    {
      content:
        "Each FROSSSY PUNK is uniquely different from one another, some with special powers to different rare accessories.",
    },
    {
      content:
        "Certain NFT have exclusive access to events in the future and merchandise an accessories limited drops.",
    },
    {
      content:
        "Certain NFT's utilities and properties have real life usage in the real world and metaverse.",
    },
    {
      content:
        "Also certain frosssy punks nft characters are part of Skunk Gang, which is its own set within the Frosssy Punks collection, that makes them more rare an valuable cause the Skunk Gang set are limited there's about 100 out of 400 that are Skunk Gang",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #ed4344, #73318a)",
          padding: "22px 0px",
        }}
      >
        <div className="inner-container rarity">
          <h2 className="font-face-gm">RARITY</h2>
          {description.map((d) => (
            <div className="rarity-content" key={d.content}>
              <img src="/assets/images/check.png" alt="check" />
              <p>{d.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
