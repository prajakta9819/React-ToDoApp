import React from "react";
import styles from "./styles.css";

import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoComponent = this.state.todos.map((abc) => (
      <TodoItem key={abc.id} abc={abc} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoComponent}</div>;
  }
}

export default App;
