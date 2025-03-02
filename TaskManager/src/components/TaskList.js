import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onComplete }) => (
  <div>
    {tasks.map(task => (
      <Task
        key={task.id}
        task={task}
        onDelete={onDelete}
        onComplete={onComplete}
      />
    ))}
  </div>
);

export default TaskList;