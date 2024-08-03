// src/FeaturesPage.js
import React, { useEffect, useRef } from 'react';
import expense from './expense.jpg';
import './features.css';
import inventory from './inventory.jpg';
import invoice from './invoice.jpg';

const FeaturesPage = () => {
  const inventoryRef = useRef(null);
  const expenseRef = useRef(null);
  const invoiceRef = useRef(null);

  useEffect(() => {
    inventoryRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="features-container">
      <h1>Our Features</h1>
      <p className="quote">"Simplifying your business operations"</p>
      <div className="feature-buttons">
        <button onClick={() => scrollToSection(inventoryRef)}>Inventory Management</button>
        <button onClick={() => scrollToSection(expenseRef)}>Expense Tracker</button>
        <button onClick={() => scrollToSection(invoiceRef)}>Invoice Generation</button>
      </div>
      <div ref={inventoryRef} className="feature-section">
        <div className="feature-content">
          <div className="feature-text">
            <h2>Inventory Management</h2>
            <p>Manage your inventory efficiently and keep track of stock levels in real-time.</p>
          </div>
          <div className="feature-image">
            <img src={inventory} alt="Inventory Management" />
          </div>
        </div>
      </div>
      <div ref={expenseRef} className="feature-section">
        <div className="feature-content">
          <div className="feature-text">
            <h2>Expense Tracker</h2>
            <p>Track your expenses and manage your budget effortlessly with our expense tracker.</p>
          </div>
          <div className="feature-image">
            <img src={expense} alt="Expense Tracker" />
          </div>
        </div>
      </div>
      <div ref={invoiceRef} className="feature-section">
        <div className="feature-content">
          <div className="feature-text">
            <h2>Invoice Generation</h2>
            <p>Create and send professional invoices to your clients quickly and easily.</p>
          </div>
          <div className="feature-image">
            <img src={invoice} alt="Invoice Generation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
