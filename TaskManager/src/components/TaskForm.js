import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) {
      alert('Please enter a task!');
      return;
    }
    onAdd(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter new task..."
        className="task-input"
      />
      <button type="submit" className="btn btn-add">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;