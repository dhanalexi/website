import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="About Me" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
              <div className="contact-info">
                <h1 className="icons">Let's Connect!</h1>
                <br />

                <ul className="contact-icons">
                 
                  <li>
                    <a
                      href="https://www.linkedin.com/in/dhaniel-reid-345231307/"
                      className=" fa fa-linkedin-square"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:dhanielalexia@gmail.com"
                      className="icon solid fa fa-envelope-o"
                    >
                      <span className="label">Email</span>
                    </a>
                  </li>
                </ul>
                
              </div>
              <br />
              <br />
    
      
              <h3>Why did I decide to build this site?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((item, index) => (
                          <li key={`${item}-${index}`}>{item}</li>
                        ))
                      : "loading..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((item, index) => (
                          <li key={`${item}-${index}`}>{item}</li>
                        ))
                      : "loading..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

