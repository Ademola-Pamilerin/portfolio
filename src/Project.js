import React, { useState } from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.jpg";
import Project2 from "./img/portfolio-2.jpg";
import Project3 from "./img/portfolio-3.jpg";

import { createPortal } from "react-dom";
import OgacSIteData from "./component/ogac";
import Myrecent from "./component/my_recent";
import Hinge from "./component/hinge";

function Project() {
  const [showogac, setShowOgac] = useState(false);
  const [showrecent, setshow_recent] = useState(false);
  const [showhinge, setShowHInge] = useState(false);
  let portal = document.getElementById("portal");
  let [elementPort, setElementPort] = useState(null);
  const ogac_clicked = () => {
    setElementPort(
      createPortal(
        <OgacSIteData
          clicked={() => {
            portal.classList = portal.classList.remove("claim");
            setShowOgac(false);
            setElementPort(null);
          }}
        />,
        portal
      )
    );
    portal.classList.add("claim");
    setShowOgac(true);
  };
  const recent_click = () => {
    setElementPort(
      createPortal(
        <Myrecent
          clicked={() => {
            portal.classList = portal.classList.remove("claim");
            setShowOgac(false);
            setElementPort(null);
          }}
        />,
        portal
      )
    );
    portal.classList.add("claim");
    setshow_recent(true);
    setShowOgac(false);
  };
  const hingeClicked = () => {
    setElementPort(
      createPortal(
        <Hinge
          clicked={() => {
            portal.classList = portal.classList.remove("claim");
            setShowOgac(false);
            setElementPort(null);
          }}
        />,
        portal
      )
    );
    portal.classList.add("claim");
    setshow_recent(false);
    setShowHInge(true);
    setShowOgac(false);
  };
  return (
    <div className="project component__space" id="Portfolio">
      {(showogac || showrecent || showhinge) && elementPort}
      <div className="heading">
        <div className="aside">
          <h1 className="heading aside2">My Latest Project</h1>
          <p className="heading p__color">These are some of my projects</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Software Engineer</h5>
                <h4 className="project__text">Freelance</h4>
                <button onClick={recent_click} className="project__btn">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Full-Stack Developer</h5>
                <h4 className="project__text">
                  A school Management App (OGAC)
                </h4>
                <button onClick={ogac_clicked} className="project__btn">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Backend Engineer</h5>
                <h4 className="project__text">Contract</h4>
                <button onClick={hingeClicked} className="project__btn">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
