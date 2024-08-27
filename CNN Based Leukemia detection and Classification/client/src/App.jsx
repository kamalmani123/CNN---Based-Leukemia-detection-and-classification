import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Detec from "./Components/Detec";
import Prevention from "./Components/Prevention";
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/Detection' element = {<Detec />}/>
          <Route path = '/Prevention' element = {<Prevention />}/>
        </Routes>
    </div>
  );
};

export default App
