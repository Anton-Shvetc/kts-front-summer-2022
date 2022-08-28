import React from "react";
import Recipes from "../Recipes/Recipes";
import RecipesItem from "../RecipesItem/RecipesItem";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipesItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
