import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BeerInfoHOC } from "./BeerInfoHOC";
import { BeerTable } from "./BeerTable";
import { Layout } from "./Layout";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<BeerTable/>}/>
          <Route path="/beer/:beerId" element={<BeerInfoHOC/>}/>
          <Route path="/beer/" element={<BeerInfoHOC/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}