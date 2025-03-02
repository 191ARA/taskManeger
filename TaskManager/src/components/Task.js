import React from 'react';

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div>
        <button 
          onClick={() => onComplete(task.id)}
          className="btn btn-complete"
        >
          ✓
        </button>
        <button 
          onClick={() => onDelete(task.id)}
          className="btn btn-delete"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Task;