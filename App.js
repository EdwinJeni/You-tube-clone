import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Video from './videos/Video'
import { useState } from 'react';

const App=()=>{
  const [sidebar,setSidebar]=useState(true);
  return(
    <div>
      <Navbar setSidebar ={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}
export default App;