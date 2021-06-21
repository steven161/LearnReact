import React, { useEffect, useState } from "react";
import styles from "./TodoItem.module.css";
import { FaTrash } from "react-icons/fa";

function TodoItem(props) {
  const { id, title, completed } = props.todo;
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleEditting = () => {
    console.log("edit mode activated");
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  useEffect(() => {
    return () => {
      console.log("Clean up TodoItem : ");
    };
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditting} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button onClick={() => props.handleDelete(id)}>
          <FaTrash style={{ color: "orangered", fontSize: 16 }} />
        </button>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => props.setUpdate(e.target.value, id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
