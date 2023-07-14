import React from 'react';

const Task = ({ task, completeTask, deleteTask }) => {
  const { id, title, date, completed } = task;

  const handleComplete = () => {
    completeTask(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <li className={`task ${completed ? 'completed' : ''}`}>
      <div>
        <span className="task-title">{title}</span>
        <span className="task-date">{date}</span>
      </div>
      {!completed && (
        <div className="task-actions">
          <button onClick={handleComplete}>Complete</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default Task;
