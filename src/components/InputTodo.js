import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './InputTodo.css';
import PropTypes from 'prop-types';

function InputTodo({ addItem }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addItem(title);
      setTitle('');
    }
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          className="todo-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="add-button">
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </form>
    </>
  );
}
InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};
export default InputTodo;
