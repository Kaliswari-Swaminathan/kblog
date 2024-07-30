import React from 'react';
import { Navbar } from './Components/Navbar';
import { Banner } from './Components/Banner';
import {About} from './Components/About';
import {Posts} from './Components/Posts';
import {Contact} from './Components/Contact';





import './App.css';

function App() {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <About/>
    <Posts/>
    <Contact/>
    </div>
   
  );
}

export default App;
