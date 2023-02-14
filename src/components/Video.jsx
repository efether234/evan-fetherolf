import React from "react";

const Video = (props) => {
  const shareUrl = new URL(props.url);
  const embedUrl = new URL(
    `/embed/${shareUrl.pathname}`,
    "https://www.youtube.com"
  );

  return (
    <iframe
      width="560"
      height="315"
      src={embedUrl}
      title={props.title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};

export default Video;

// https://www.youtube.com/embed/n7xv95N6Kzg
// https://youtu.be/n7xv95N6Kzg
