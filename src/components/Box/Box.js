import React from "react";
import "./Box.scss";

const Box = ({ style, delBox, boxes, id }) => {
  let { width, height, backColor } = style;
  const delBoxHandler = () => {
    let newBoxes = boxes.filter(box => id !== box.id);
    delBox(newBoxes);
  };
  if (backColor === "") {
    backColor = "white";
  }
  
  return (
    <div className="single-box">
      <div
        className="box"
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: backColor
        }}
      ></div>
      <button
        onClick={delBoxHandler}
        className="box-del-btn"
        style={{ width: `${width}px` }}
      >
        {width < 40 ? "X" : "Delete"}
      </button>
    </div>
  );
};

export default Box;
