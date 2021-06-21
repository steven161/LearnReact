import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function InputTodo(props) {
  const [inputText, setInputText] = useState({ title: "" });
  //const [title, setTitle] = useState("");

  const onChange = (e) => {
    //setTitle(e.target.value);
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.handleAdd(inputText.title);
      setInputText({ title: "" });
    } else {
      alert("Please Write Item");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo"
        name="title"
        value={inputText.title}
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
}
