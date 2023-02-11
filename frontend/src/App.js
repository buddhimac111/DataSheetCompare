import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <div className="App"> 
      <Routes>
        < Route path="/" element= {<Landing/>}/>
        < Route path="/home" element= {<Home/>}/>
      </Routes> 
    </div>
   </BrowserRouter>
    </div>
  );
}

export default App;
