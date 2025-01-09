// src/components/ItemEditForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemEditForm = ({ item, setItems, setEditingItem }) => {
  const [designer, setDesigner] = useState(item.designer);
  const [designDescription, setDesignDescription] = useState(item.design_description);

  useEffect(() => {
    setDesigner(item.designer);
    setDesignDescription(item.design_description);
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = { designer, design_description: designDescription };
    try {
      const response = await axios.put(`https://ezieke-jennifer-backend-capstone.onrender.com/item/${item._id}`, updatedItem);
      setItems((prevItems) =>
        prevItems.map((item) =>
          item._id === response.data._id ? response.data : item
        )
      );
      setEditingItem(null);  // Clear the editing form after submitting
    } catch (error) {
      console.error('Error updating item', error);
    }
  };

  return (
    <div className="mt-4 p-4 border rounded shadow-sm bg-light">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="designer">Designer Name</label>
          <input
            type="text"
            id="designer"
            className="form-control"
            value={designer}
            onChange={(e) => setDesigner(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="designDescription">Description</label>
          <textarea
            id="designDescription"
            className="form-control"
            value={designDescription}
            onChange={(e) => setDesignDescription(e.target.value)}
            rows="4"
            required
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ItemEditForm;


