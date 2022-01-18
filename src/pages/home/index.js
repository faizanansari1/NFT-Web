import React from "react";
import "@fontsource/gloria-hallelujah"; // Defaults to weight 400.
import {
  Header,
  HeadContent,
  ContentText,
  ContentSlide,
  OpenSea,
  Collection,
  Gallery,
  FuturePlans,
  Rarity,
  RoadMap,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <HeadContent />
      <ContentText />
      <ContentSlide />
      <OpenSea />
      <Collection />
      <Gallery />
      <FuturePlans />
      <Rarity />
      <RoadMap />
      <Footer />
    </>
  );
};

export default Home;
