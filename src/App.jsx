import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./Styles/Home.scss";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

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
