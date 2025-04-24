import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">All Tasks</Link> | <Link to="/create">Create Task</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
