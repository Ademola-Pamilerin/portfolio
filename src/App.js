import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";

function App() {
  return (
    <div className="App">
      <Home />
      <div id="About">
        <About />
      </div>
      <Service />
      <Project />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
