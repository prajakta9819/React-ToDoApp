import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.abc.completed}
        //event handling
        onChange={() => props.handleChange(props.abc.id)}
      />
      <p style={props.abc.completed ? completedStyle : null}>
        {props.abc.text}{" "}
      </p>
    </div>
  );
}

export default TodoItem;
