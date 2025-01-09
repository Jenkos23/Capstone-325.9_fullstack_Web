// src/components/DeleteButton.jsx
import React from 'react';

const DeleteButton = ({ onDelete }) => {
  return (
    <button className="btn btn-danger" onClick={onDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
