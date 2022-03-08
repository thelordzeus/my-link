import { useState } from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>Hello there!!</h1>
      <h2>
        I'm Lord Zeus, a front end software Engineer focused on building
        beautiful experiences and interfaces
      </h2>

      <div className="socials">
        <a href="https://github.com/thelordzeus">
          <i class="fa-brands fa-github fa-2xl"></i>
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="https://www.linkedin.com/in/arnavshukla">
          <i class="fa-brands fa-linkedin-in fa-2xl"></i>
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="https://www.instagram.com/thelordzeus_/">
          <i class="fa-brands fa-instagram fa-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
