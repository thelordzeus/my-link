import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./config/particle-config";

const particleBackground = () => {
  return <Particles params={particleConfig} />;
};

export default particleBackground;
