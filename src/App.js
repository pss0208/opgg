import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
