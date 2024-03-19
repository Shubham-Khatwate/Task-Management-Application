import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title });
      setTitle('');
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title mb-3">Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Enter task title"
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-primary animate__animated animate__bounceIn"
              >
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;