
import Maps from "./pages/maps"
import Business from "./pages/business";
import About from "./pages/about";
import Medicine from "./pages/medicine";
import { Route, Routes } from "react-router-dom"




function Pages() {
  return (

    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/maps" element={<Maps/>} />
      <Route path="/business" element={<Business/>} />
      <Route path="/medicine" element={<Medicine/>} />
    </Routes>

  );
}

export default Pages;