import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import PageNotFound from "./pages/PageNotFound";
import Recipedetail from "./pages/Recipedetail";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/recipedetail/:id" element={<Recipedetail/> }/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
