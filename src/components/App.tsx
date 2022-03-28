import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BeerInfo } from "./BeerInfo";
import { BeerTable } from "./BeerTable";
import { Layout } from "./Layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<BeerTable/>}/>
          <Route path="/beer/:beerId" element={<BeerInfo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}