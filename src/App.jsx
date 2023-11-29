
import './index.css';
import React,{useState} from "react";
import {BrowserRouter as  Router ,Routes, Route} from 'react-router-dom';
import Head from './Components/Header/Head';
import Email from './Components/Email'

function App() {
  return (
    <>
      <Router>
        <Head/>
        <Email/>
      </Router>
    </>
  );
}

export default App;
