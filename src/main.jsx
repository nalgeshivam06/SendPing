import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { createRoot } from 'react-dom/client';
import PreviewScreen from './Components/PreviewScreen.jsx';
import Main from './Components/Main.jsx';
import Email from './Components/Email.jsx';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Email />} />
          <Route path="/preview" element={<PreviewScreen />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
