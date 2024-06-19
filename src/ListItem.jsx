import React from "react";

const ListItem = ({ task, index, toggleComplete, deleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(index)}
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default ListItem;
