import React from "react";
import { Task } from "./Task";

export const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
