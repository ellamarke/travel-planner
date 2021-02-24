import React, { useState, useEffect, useRef } from "react";
import "../css/Layout.css";
import "../css/Profile.css";

function ListForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : ""); // this keeps the user inputted value when we go to edit -- otherwise it would be an empty string

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents full page reload every time 'submit' is pressed

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), // creates a random number between 0 and 10,000
      text: input,
    });

    setInput("");
  };
  return (
    <form className="list-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="list-input edit"
            type="text"
            placeholder="Update your item!"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button className="list-button edit">Update!</button>
        </>
      ) : (
        <>
          (
          <input
            className="list-input"
            type="text"
            placeholder="Add something to list!"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button className="list-button">Add to list</button>)
        </>
      )}
    </form>
  );
}

export default ListForm;