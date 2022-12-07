import React from "react";
import Header from "../components/Header";
import MaskInfo from "../components/about/MaskInfo";
import Analysis from "../components/about/Analysis";
import MaskDetail from "../components/about/MaskDetail";
import Reviews from "../components/about/Reviews";
import RecentView from "../components/RecentView";
import UpBtn from "../components/UpBtn";

function AboutPage() {
  return (
    <div>
      <Header />
      <MaskInfo />
      <Analysis />
      <MaskDetail />
      <Reviews />
      <RecentView />
      <UpBtn />
    </div>
  );
}

export default AboutPage;
