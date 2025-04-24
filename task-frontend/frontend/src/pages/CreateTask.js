import React, { useState } from 'react';
import { createTask } from '../services/taskService';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const [form, setForm] = useState({ title: '', description: '', status: 'pending', dueDate: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" required onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input type="datetime-local" required onChange={e => setForm({ ...form, dueDate: e.target.value })} />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
