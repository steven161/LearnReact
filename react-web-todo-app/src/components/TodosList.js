import React from "react";
import TodoItem from "./TodoItem";

export default function TodosList(props) {
  return (
    <ul>
      {props.todos.map((item, index) => (
        <TodoItem
          key={item.id}
          todo={item}
          handleChangeProps={props.handleChangeProps}
          handleDelete={props.handleDelete}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
}
