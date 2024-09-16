import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter , Route, Routes } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<News key="general" pageSize={9} country="us" category="general"/>}></Route>
        <Route exact path="/business" element={<News key="business" pageSize={9} country="us" category="business"/>}></Route>
        <Route exact path="/science" element={<News key="science" pageSize={9} country="us" category="science"/>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="us" category="entertainment"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" pageSize={9} country="us" category="sports"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


