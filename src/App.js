import "./App.css";
import Home from "./Home";
import NavBar from "./Navbar";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Home />
      </div>
      <div className="Particle">{/* <ParticleBackground /> */}</div>
    </div>
  );
}

export default App;
