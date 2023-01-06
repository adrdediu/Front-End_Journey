import './App.css';
import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Routes, Route, Link } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from 'react';

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
