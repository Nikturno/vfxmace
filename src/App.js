import React from 'react';

import { Header, Short, Long, Thumbnail, Contact } from './containers';
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
        </div>
        <div>
            <Header />
            <Short />
            <Long />
            <Thumbnail />
            <Contact />
        </div>
    </div>
  )
}

export default App
