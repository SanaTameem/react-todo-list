import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

function TodoItem({
  todo, deleteItem, editItem, toggleCompleted,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleCheckboxChange = () => {
    toggleCompleted(todo.id);
  };

  const handleDeleteClick = () => {
    deleteItem(todo.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedTitle.trim() !== '') {
      editItem(todo.id, editedTitle);
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <div className="todo-item">
      <div className="check-text">
        <input
          type="checkbox"
          className="check-state"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            className="edit-input"
          />
        ) : (
          <p className={todo.completed ? 'todo-item-text completed' : 'todo-item-text'}>
            {todo.title}
          </p>
        )}
      </div>
      <div className="edit-delete-container">
        {isEditing ? (
          <>
            <button type="button" className="save-button" onClick={handleSaveClick}>
              Save
            </button>
            <button type="button" className="cancel-button" onClick={handleCancelClick}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faTrash} onClick={handleDeleteClick} />
            <FontAwesomeIcon icon={faPen} onClick={handleEditClick} />
          </>
        )}
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default TodoItem;
