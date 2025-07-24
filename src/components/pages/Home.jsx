import React, { useEffect } from "react";
import Banner from "../Banner";
// import OurJourney from "../OurJourney";
import WorldLeader from "../WorldLeader";
import MapLocation from "./MapLocation";
import OurClients from "./OurCorporateClients";
import ConnectWithSlider from "./ConnectWithSlider";
import SolutionSlider from "./SolutionForIndustries";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#F7F9FB] ">
      <Banner />
      {/* <OurJourney /> */}

      <WorldLeader />

      <ConnectWithSlider />
      <SolutionSlider />
      <MapLocation />
      <OurClients />
    </div>
  );
};

export default Home;
