import React from "react";

export default (props) => {
  return (
    <div>
      <iframe
        
        
        width="560"
        height="315"
        src= {props.src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
