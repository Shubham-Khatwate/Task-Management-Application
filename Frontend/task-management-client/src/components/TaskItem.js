import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
  };

  const handleSaveClick = () => {
    const updatedTask = { ...task, title: editedTitle };
    updateTask(updatedTask);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  const handleCompleteClick = () => {
    const updatedTask = { ...task, completed: !task.completed };
    updateTask(updatedTask);
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn ${
        task.completed ? 'bg-success text-white' : ''
      }`}
    >
      {isEditing ? (
        <div className="d-flex">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="form-control mr-2"
          />
          <button
            className="btn btn-primary mr-2"
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span
            className={`${task.completed ? 'text-decoration-line-through' : ''}`}
          >
            {task.title}
          </span>
          <div>
            <button
              className={task.completed ? "btn btn-light mr-2" : "btn btn-success mr-2"}
              onClick={handleCompleteClick}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              className="btn btn-primary mr-2"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;