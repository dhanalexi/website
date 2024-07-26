import React from "react";

export const Expertise = (props) => {
  return (
    <div id="expertise" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>My Expertise</h2>
          <p>
            My skills that I have solidified include:
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="expertise-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
