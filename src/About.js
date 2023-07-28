import React from "react";
import "./About.css";
function About() {
  const clicked = () => {
    console.log("clicked");
  };
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a full-stack JavaScript developer with 3+ years of
                experience building and maintaining web applications. I am
                proficient in all aspects of the web development process, from
                front-end design and development to back-end programming and
                database management.
              </p>
              <p className="about__text p__color">
                I am particularly passionate about using JavaScript to build
                dynamic mobile applications and interactive web applications. I
                have a strong understanding of JavaScript's core concepts and
                APIs, and I am familiar with a variety of JavaScript frameworks
                and libraries. In addition to my JavaScript skills, I also have
                experience with other web development technologies, such as
                HTML, CSS, Python, and MySQL. I am also proficient in version
                control systems and continuous integration/continuous delivery
                (CI/CD) pipelines.
              </p>
              <p className="about__text p__color">
                I am a highly motivated and results-oriented individual. I am
                always eager to learn new technologies and techniques, and I am
                always looking for ways to improve my skills. I am also a team
                player who's able to work effectively with others to achieve
                common goals.I am confident that I have the skills and
                experience necessary to be a valuable asset to any team hoping
                to hire me.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer" onClick={clicked}>
                    Download Cv
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/ademola-ade-akanfe/">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
