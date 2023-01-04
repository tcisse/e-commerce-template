import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
