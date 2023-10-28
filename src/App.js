import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home/home";
import { Sidebar } from "./Sidebar/sidebar";
import { Profile } from "./Profile/profile";
import Post from "./Post/post";
const App = () => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
