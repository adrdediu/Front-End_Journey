import './App.css';
import "./assets/stylesheets/reservationFeatureStyle.css"

import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ReservationDetails from"./components/ReservationDetails"
import ReservationAccountCreation from './components/ReservationAccountCreation';
import { Routes, Route} from "react-router-dom";
//import { useLayoutEffect, useRef, useState } from 'react';

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/reservations" element={<ReservationDetails/>}/>
          <Route exact path="/reservations-create-account" element={<ReservationAccountCreation/>} />
          <Route component={Error} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
