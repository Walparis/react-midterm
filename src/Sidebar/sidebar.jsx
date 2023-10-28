import React from "react";
import "./sidebar.css";
export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <button
        className="row"
        onClick={() => {
          window.location.pathname = "/home";
        }}
      >
        Home
      </button>
      <button
        className="row"
        onClick={() => {
          window.location.pathname = "/posts";
        }}
      >
        Posts
      </button>
      <button
        className="row"
        onClick={() => {
          window.location.pathname = "/profile";
        }}
      >
        Profile
      </button>
    </div>
  );
};
