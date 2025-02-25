import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import TestPage from './pages/TestPage';

function AppWrapper() {
  return (
    <Router>
      <Routes>
        {import.meta.env.DEV && <Route path="/test" element={<TestPage />} />}
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
