import React, { Component } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

export default class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    console.log("clicked : " + id);

    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    console.log("delete : " + id);
    this.setState((prevState) => ({
      todos: [...prevState.todos.filter((todo) => todo.id !== id)],
    }));
  };

  addTodoItem = (title) => {
    console.log("add todo : " + title);
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  updateItem = (title, id) => {
    //console.log(title, id);
    this.setState({
      todos: [
        ...this.state.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, title: title };
          }
          return todo;
        }),
      ],
    });
  };

  componentDidMount() {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({ todos: loadedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", temp);
    }
  }

  componentWillUnmount() {
    console.log("Clean up...");
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo handleAdd={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            handleDelete={this.delTodo}
            setUpdate={this.updateItem}
          />
        </div>
      </div>
    );
  }
}
