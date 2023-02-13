import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
