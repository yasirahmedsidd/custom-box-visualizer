import React, { useState } from "react";
import Box from "../Box/Box";
import "./BoxList.scss";
import CreateBox from "../CreateBox/CreateBox";
const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  
  return (
    <div className="box-container">
      <CreateBox setNewBox={setBoxes} boxes={boxes} />
      <div className="container-for-boxes">
        {boxes.map(box => (
          <Box
            delBox={setBoxes}
            boxes={boxes}
            key={box.id}
            id={box.id}
            style={{
              width: box.width,
              height: box.height,
              backColor: box.backColor
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
