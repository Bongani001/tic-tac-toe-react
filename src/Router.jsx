import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/details/Details";
import Game from "./pages/game/Game";
import Header from "./components/header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
