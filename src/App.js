import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import Schedule from './components/Schedule'
import Login from './components/Login'
import SearchBar from './components/SearchBar';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
