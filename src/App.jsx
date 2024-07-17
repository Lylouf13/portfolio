import './App.scss';
import {React, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar.jsx';
import Router from './Components/MyRouter.jsx';


function App() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash==='#top') {
      window.scrollTo({top:0,left:0, behavior: 'instant'});
    } 
  })
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
