import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./Styles/Home.scss";
import About from "./modules/About";
import NavBar from "./modules/NavBar";
import Home from "./modules/Home";
import Skills from "./modules/Skills";
import Footer from "./modules/Footer";
import Projects from "./modules/Projects";

function App() {
  const [navstate, setNavState] = useState("Home");

  function updateNavState(newNavstate) {
    setNavState(newNavstate);
  }

  return (
    <div className="wrapper">
      <NavBar updateNavState={updateNavState} navstate={navstate}></NavBar>
      <main>
        {navstate == "Home" && <Home updateNavState={updateNavState} />}
        {navstate == "About" && <About />}
        {navstate == "Skills" && <Skills />}
        {navstate == "My Project" && <Projects />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
