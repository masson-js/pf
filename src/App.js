
import './App.css';
import About from "./components/pages/about";
import D3 from "./components/pages/d3"
import Menu from "./components/menuWindow";

import { Route, Routes } from "react-router-dom"


function App() {
  return (
     <div className="App">
     <>
     <Menu/>
      <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/d3" element={<D3/>} />
      </Routes>
      </>
    </div>
  );
}

export default App;
