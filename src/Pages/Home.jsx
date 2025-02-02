import React from "react";
import Hero from '../Components/Hero';
import LatestColl from '../Components/LatestCollections'
import BestSellers from "../Components/BestSellers";
import OurPolicy from "../Components/OurPolicy";
import Subscribe from "../Components/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestColl/>
      <BestSellers/>
      <OurPolicy/>
      <Subscribe/>
    </div>
  )
}

export default Home
