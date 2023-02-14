import React from "react";

const Hero = () => {
  return (
    <section class="hero">
      <div class="hero-content">
        <img src="img/evan.jpg" />
        <div class="hero-text">
          <h1 class="text-shadow-orange">Evan Fetherolf</h1>
          <h2 class="text-shadow-orange">Video Editor</h2>
          <a
            href="mailto:efether234ATgmailDOTcom"
            class="btn btn-blue box-shadow-blue"
            onclick="this.href=this.href.replace(/AT/, '&#64;').replace(/DOT/, '&#46;')"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
