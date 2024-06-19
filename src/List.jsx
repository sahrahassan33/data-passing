import React from "react";
import ListItem from "./ListItem";

const List = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <ListItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default List;
