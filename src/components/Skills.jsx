import React from "react";

const Skills = () => {
  return (
    <section class="skills">
      <div class="container">
        <h3>What I Know</h3>
        <hr />
        <div class="skills-boxes">
          <div class="skills-box">
            <img src="icons/pr.png" />
            <p>Premiere Pro</p>
          </div>
          <div class="skills-box">
            <img src="icons/ae.png" />
            <p>After Effects</p>
          </div>
          <div class="skills-box">
            <img src="icons/ai.png" />
            <p>Illustrator</p>
          </div>
          <div class="skills-box">
            <img src="icons/ps.png" />
            <p>Photoshop</p>
          </div>
          <div class="skills-box">
            <img src="icons/avid.png" />
            <p>Media Composer</p>
          </div>
          {/* <div class="skills-box">
          <img src="icons/node.png" />
          <p>Node.js</p>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
