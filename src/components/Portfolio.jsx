import React from "react";
import Video from "./Video";

const Portfolio = () => {
  return (
    <section class="work">
      <div class="container">
        <h3>What I've Done</h3>
        <hr />
        <div class="videos">
          <Video
            url="https://youtu.be/n7xv95N6Kzg"
            title="Robert Mondavi Private Selection"
          />
          <Video
            url="https://youtu.be/nL85C1nKlSY"
            title="Kia Hatchback Theater"
          />
          <Video
            url="https://youtu.be/SjRyrojds8s"
            title="Basil Hayden Bar Tray"
          />
          <Video
            url="https://youtu.be/pJ7M32nLQNE"
            title="Scrubbing Bubbles Bathroom Oasis"
          />
          <Video
            url="https://youtu.be/A5YLQPgdRbs"
            title="Scary Halloween Desserts"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
