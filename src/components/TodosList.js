import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos, deleteItem, editItem, toggleCompleted,
}) {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteItem={deleteItem}
          editItem={editItem}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default TodosList;
