import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 65,
        left: 0,
        width: '250px',
        height: '100vh',
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        fontSize: '18px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1,
        borderRadius: '0 20px 20px 0',
        overflowY: 'auto',
        // Responsive styles
        '@media (max-width: 768px)': {
          width: '100%',
          height: 'auto',
          padding: '10px',
          fontSize: '16px',
        },
      }}
    >
      <Link
        to="/dashboard"
        style={{
          textDecoration: 'none',
          color: '#fff',
          transition: 'color 0.3s ease',
          ':hover': {
            color: '#ccc',
          },
        }}
      >
        <div
          style={{
            padding: '10px 20px',
            borderBottom: '1px solid #444',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            // Responsive styles
            '@media (max-width: 768px)': {
              padding: '10px',
            },
          }}
        >
          <i className="fas fa-info-circle" style={{ marginRight: 10 }} />
          About Us
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;