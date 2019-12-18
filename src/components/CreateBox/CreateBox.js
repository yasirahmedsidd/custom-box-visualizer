import React, { useState } from "react";
import "./CreateBox.scss";
import shortId from "shortid";
const CreateBox = ({ boxes, setNewBox }) => {
  const [inputs, setInputs] = useState({
    width: "",
    height: "",
    backColor: "",
    id: shortId.generate()
  });
  const onchangeHandler = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };
  const onClickHander = e => {
    setNewBox([...boxes, inputs]);
    setInputs({
      width: "",
      height: "",
      backColor: "",
      id: shortId.generate()
    });
  };

  return (
    <form className="form" onSubmit={e => e.preventDefault()}>
      <div className="input">
        <label htmlFor="width">Enter Width</label>
        <input
          autoFocus={true}
          type="text"
          name="width"
          id="width"
          placeholder="100"
          value={inputs.width}
          onChange={onchangeHandler}
        />
      </div>
      <div className="input">
        <label htmlFor="height">Enter Height</label>
        <input
          type="text"
          name="height"
          id="height"
          placeholder="100"
          value={inputs.height}
          onChange={onchangeHandler}
        />
      </div>

      <div className="input">
        <label htmlFor="backColor">Enter Color</label>
        <input
          type="text"
          name="backColor"
          id="backColor"
          placeholder="lime"
          value={inputs.backColor}
          onChange={onchangeHandler}
        />
      </div>
      <div className="input">
        <button onClick={onClickHander}>Create </button>
      </div>
    </form>
  );
};

export default CreateBox;
