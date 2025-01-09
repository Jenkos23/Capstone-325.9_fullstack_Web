// src/pages/OrderItem.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemEditForm from '../components/EditItemform';
import DeleteButton from '../components/DeleteButton';
import DateTimeDisplay from '../components/DatetimeDisplay';

const Task = () => {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [designer, setDesigner] = useState('');
    const [designDescription, setDesignDescription] = useState('');
  
    useEffect(() => {
      const fetchItems = async () => {
        const response = await axios.get('https://ezieke-jennifer-backend-capstone.onrender.com/item');
        setItems(response.data);
      };
      fetchItems();
    }, []);
  
    const handleEdit = (item) => {
      setEditingItem(item);
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`https://ezieke-jennifer-backend-capstone.onrender.com/item/${id}`);
        setItems(items.filter((item) => item._id !== id));
      } catch (error) {
        console.error('Error deleting item', error);
      }
    };
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      if (!editingItem) {
        console.error('No item selected for update');
        return;
      }
  
      const updatedItem = { designer, design_description: designDescription };
      try {
        const response = await axios.put(`https://ezieke-jennifer-backend-capstone.onrender.com/item/${editingItem._id}`, updatedItem);
        setItems((prevItems) =>
          prevItems.map((item) =>
            item._id === response.data._id ? response.data : item
          )
        );
        setDesigner('');
        setDesignDescription('');
        setEditingItem(null);
      } catch (error) {
        console.error('Error updating item', error);
      }
    };
  
    const handlePost = async (e) => {
      e.preventDefault();
      const newItem = { designer, design_description: designDescription };
      try {
        const response = await axios.post('https://ezieke-jennifer-backend-capstone.onrender.com/item/', newItem);
        setItems([...items, response.data]);
        setDesigner('');
        setDesignDescription('');
      } catch (error) {
        console.error('Error posting new item', error);
      }
    };
  
    return (
      <>
      <DateTimeDisplay/>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Design Blueprint</h1>
  
        <div className="row">
          {items.map((item) => (
            <div key={item._id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">{item.designer}</h3>
                  <p className="card-text">{item.design_description}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <DeleteButton onDelete={() => handleDelete(item._id)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {editingItem && (
          <ItemEditForm
            item={editingItem}
            setItems={setItems}
            setEditingItem={setEditingItem}
          />
        )}
  
        <div className="mt-5">
          <h2 className="text-center mb-4">Request Designer Update</h2>
          <form onSubmit={handleUpdate} className="p-4 border rounded shadow-sm bg-light">
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
            <button type="submit" className="btn btn-success btn-block">
              Update Designer
            </button>
          </form>
        </div>
  
        {/* New Item Post Form */}
        <div className="mt-5">
          <h2 className="text-center mb-4">Add New Designer</h2>
          <form onSubmit={handlePost} className="p-4 border rounded shadow-sm bg-light">
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
            <button type="submit" className="btn btn-primary btn-block">
              Post New Designer
            </button>
          </form>
        </div>
      </div>
      </>
    );
  };
  
  export default Task;