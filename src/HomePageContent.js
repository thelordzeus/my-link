import React from "react";
import "./HomePagecontent.css";
import LocomotiveScroll from "locomotive-scroll";
const HomePageContent = () => {
  const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  return <h1>Is this working ?</h1>;
};

export default HomePageContent;
