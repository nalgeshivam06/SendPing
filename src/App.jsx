
import './index.css';
import React,{useState} from "react";
import Head from './Components/Header/Head';
import Email from './Components/Email'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Head />
      <Outlet/>
    </>
  );
}

export default App;
