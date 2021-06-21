import React, { useEffect, useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar";

export default function TodoContainer() {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    console.log("clicked : " + id);

    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    console.log("delete : " + id);
    setTodos((prevState) => [...prevState.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    console.log("add todo : " + title);
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateItem = (title, id) => {
    //console.log(title, id);
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: title };
        }
        return todo;
      }),
    ]);
  };

  function getInitialTodos() {
    console.log("test run getInitialTodos");
    // getting stored items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  /*
  useEffect(() => {
    console.log("test run");

    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);
*/
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo handleAdd={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                handleDelete={delTodo}
                setUpdate={updateItem}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
}
