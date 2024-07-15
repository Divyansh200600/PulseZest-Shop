import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DbPage from './pages/DashBoard/dbPage';
import LoginPage from './pages/Login/loginPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DbPage />} />
          <Route path="/" element={<h1>Hello Admin</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
