import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Options from "./pages/Options";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/options" element={<Options />} />
            {/* <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<Test2 />} /> */}
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
