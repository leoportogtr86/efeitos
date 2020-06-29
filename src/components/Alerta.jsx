import React from "react";

export default (props) => {
  return (
    <div>
      <div className={props.className}>
        <h1 className="text-center">{props.titulo}</h1>
        <p>{props.info}</p>
      </div>
    </div>
  );
};
