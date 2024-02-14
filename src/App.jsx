
import './index.css';
import React,{useState} from "react";
import Head from './Components/Header/Head';
import Email from './Components/Email'
import { Outlet } from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
    <>
      <HomePage/>
    </>
  );
}

export default App;
