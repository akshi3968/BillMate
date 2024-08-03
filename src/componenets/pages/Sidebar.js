// src/Sidebar.js
import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li>Dashboard</li>
        <li>Sales</li>
        <li>Products</li>
        <li>Stock</li>
        <li>Orders</li>
        <li>Customers</li>
      </ul>
    </div>
  );
};

export default Sidebar;
