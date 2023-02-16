import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Options from "./pages/Options";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/options" element={<Options />} />
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
