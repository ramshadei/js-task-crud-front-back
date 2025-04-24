import React from 'react';

const TaskCard = ({ task, onDelete, onStatusChange }) => (
  <div className="task-card">
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>Status: {task.status}</p>
    <p>Due: {new Date(task.dueDate).toLocaleString()}</p>
    <button onClick={() => onStatusChange(task._id, 'completed')}>Mark Done</button>
    <button onClick={() => onDelete(task._id)}>Delete</button>
  </div>
);

export default TaskCard;
