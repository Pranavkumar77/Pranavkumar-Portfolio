import React from "react";
import useWindowDimensions from "../utils/WindowDimension";

const Resume = ({ show }) => {
  const { width } = useWindowDimensions();

  return (
    <div
      className={`card-inner animated ${
        width > 1023 ? (show ? "fadeInLeft active" : "fadeOutLeft hidden") : ""
      }`}
      id="resume-card"
    >
      <div className="card-wrap">
        <div className="content resume">
          <div className="title">
            <div className="first-letter">Resume</div>
          </div>
          <div className="row mx-lg-0 pt-4">
            <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
              <div className="resume-title">
                <div className="icon">
                  <i className="fa fa-briefcase"></i>
                </div>
                <div className="name">Experience</div>
              </div>
              <div className="resume-items px-3">
                <div className="resume-item active">
                  <div className="date">April 2021 - Present</div>
                  <div className="duration">
                    <i className="fa fa-circle"></i>1.3Y
                  </div>
                  <div className="name">Associate System Engineer </div>
                  <div className="company">
                    <a href="https://www.altimetrik.com/" target="_blank" rel="noreferrer">
                      Tata Consultancy Services
                    </a>
                  </div>
                  <p>Working on react app, creatring common component using storybook.</p>
                  <p>Fixing UI issues and optimizing css code.</p>
                </div>
                <div className="resume-item">
                  <div className="date">Nov 2020 - April 2021</div>
                  <div className="duration">
                    <i className="fa fa-circle"></i>6M
                  </div>
                  <div className="name">Trainee software Engineer</div>
                  <div className="company">
                    <a href="https://www.wealthyaffiliate.com/" target="_blank" rel="noreferrer">
                      Wealthy Affiliate
                    </a>
                  </div>
                  <p>Collaborate with creative and development teams on the execution of ideas.</p>
                  <p>
                    Transform InVision Design wireframes into React re-usable code.
                  </p>
                  <p>Worked on solving low and Mid-priority Tickets.</p>
                </div>
                {/* <div className="resume-item">
                  <div className="date">Jul 2014 - Feb 2019</div>
                  <div className="duration">
                    <i className="fa fa-circle"></i>4Y 7M
                  </div>
                  <div className="name">UI Developer</div>
                  <div className="company">
                    <a href="http://www.scorgtechnologies.com/" target="_blank" rel="noreferrer">
                      Scorg Technologies Pvt Ltd
                    </a>
                  </div>
                  <p>
                    Invovled in creating webpages and make it responsive as per clients presences
                    like devices, device different type of sizes using HTML5, CSS3, Bootstrap and
                    Angular JS.
                  </p>
                  <p>
                    Worked on Health Care Domain, handle all the functionalities on UI site related
                    to Hospital Operations.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 mb-4 pt-4 pt-md-0">
              <div className="resume-title">
                <div className="icon">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <div className="name">Education</div>
              </div>
              <div className="resume-items px-3">
                <div className="resume-item">
                  <div className="date">2016 - 2019</div>
                  <div className="name">Savitribai Phule Pune University</div>
                  <div className="company">Pune, Maharashtra</div>
                  <p>Bachelor's Degree in Mechanical Engineering</p>
                </div>
                <div className="resume-item">
                  <div className="date">2013 - 2016</div>
                  <div className="name">MSBTE</div>
                  <div className="company">Nashik, Maharashtra</div>
                  <p>Diploma In Mechanical Engineering</p>
                </div>
                <div className="resume-item">
                  <div className="date">2012 - 2013</div>
                  <div className="name">SSC</div>
                  <div className="company">Kasoda, Jalgaon, Maharashtra</div>
                  <p>Completed Secondary School Education.</p>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>

        <div className="content skills">
          <div className="title">
            <span className="first-word">My</span> Skills
          </div>

          <div className="row pt-4">
            <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
              <div className="skills-list circles">
                <div className="skill-title">
                  <span className="icon">
                    <i className="fa fa-code"></i>
                  </span>
                  <span className="name">Coding</span>
                </div>
                <ul className="text-center">
                  <li>
                    <div className="circle-progress p97">
                      <span>85%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">HTML CSS</div>
                  </li>
                  <li>
                    <div className="circle-progress p85">
                      <span>80%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">React JS</div>
                  </li>
                  <li>
                    <div className="circle-progress p85">
                      <span>80%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">JavaScript ES6</div>
                  </li>
                  <li>
                    <div className="circle-progress p95">
                      <span>85%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">Material UI</div>
                  </li>
                  <li>
                    <div className="circle-progress p75">
                      <span>40%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">Redux</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 mb-4 pt-4 pt-md-0">
              <div className="skills-list list">
                <div className="skill-title">
                  <span className="icon">
                    <i className="fa fa-laptop"></i>
                  </span>
                  <span className="name">Knowledge</span>
                </div>
                <ul>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Website design and development
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Website hosting
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Unit testing and debugging
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Responsive web design
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Cross browser compatibility
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Modern and mobile-ready
                    </div>
                  </li>
                  {/* <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Graphics and animations
                    </div>
                  </li> */}
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Search engine optimization
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
