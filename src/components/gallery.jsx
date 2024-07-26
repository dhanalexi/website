import React from "react";


export const Gallery = () => {
  return (
    <div className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Here are my latest projects:</p>
        </div>

        <section className="spotlight">
          <div className="content">
            <h2>Portfolio Website</h2>
            <p>Here's the link to this website created using React.js among other aspects to display my expertise and experience.</p>
            <p>
              <a 
                href="https://github.com/dhanalexi?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="arrow-link"
              >
                <span>View My Repository</span>
              </a>
            </p>
          </div>
        </section>

        <section className="spotlight">
          <div className="content">
            <h2>JSON Parsing Project</h2>
            <p>Developed a universal document parser for extracting data from various file formats. This project involves processing .docx files, converting them to PDF, extracting text content, and linking tables with the text content.</p>
            <p>
              <a 
                href="https://github.com/dhanalexi/JSON-Parsing-Project" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="arrow-link"
              >
                <span>View Code</span>
              </a>
            </p>
          </div>
        </section>

        <section className="spotlight">
          <div className="content">
            <h2>Capstone Project</h2>
            <p>An automated system to streamline learning equipment and support requests for the UWI Social Sciences Faculty. The system features automated reallocation and scheduling, dynamically adjusting resource assignments-student staff and equipment, in response to changes in availability or requirements.</p>
            <p>
              <a 
                href="https://github.com/clomitch/ResourceRequisitionSystem" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="arrow-link"
              >
                <span>View Code</span>
              </a>
            </p>
          </div>
        </section>
        
        <section className="spotlight">
          <div className="content">
            <h2>Email Product Statistics Graphic Design Templates</h2>
            <p>A graphic design template for presenting email product statistics. Includes various charts and graphs to effectively communicate key performance indicators and trends, enhancing clarity and engagement.</p>
            <p>
              <a 
                href="https://www.canva.com/design/DAGIDrnoJr4/zuCpzZEF_l3W97xcbvhBGg/edit?utm_content=DAGIDrnoJr4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="arrow-link"
              >
                <span>View My Design</span>
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
