import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateStatus } from '../services/taskService';
import TaskCard from '../components/TaskCard';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleStatusChange = async (id, status) => {
    await updateStatus(id, status);
    loadTasks();
  };

  useEffect(() => { loadTasks(); }, []);

  return (
    <div>
      <h1>All Tasks</h1>
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} onDelete={handleDelete} onStatusChange={handleStatusChange} />
      ))}
    </div>
  );
};

export default Home;
