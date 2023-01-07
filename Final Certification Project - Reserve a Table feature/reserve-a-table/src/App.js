import './App.css';
import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ReservationDetails from"./components/ReservationDetails"
import { Routes, Route} from "react-router-dom";
//import { useLayoutEffect, useRef, useState } from 'react';

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/reservation" element={<ReservationDetails/>}/>
          <Route component={Error} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
