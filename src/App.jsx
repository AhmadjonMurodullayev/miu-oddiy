import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home/home";
import Product from "./components/product-layout/product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
