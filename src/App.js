import "./App.css";
import Links from "./links";

import NavBar from "./Navbar";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <h1>"First we vibe."</h1>
      </div>
      <Links />
      <div className="Particle">
        <ParticleBackground />
      </div>
    </div>
  );
}

export default App;
