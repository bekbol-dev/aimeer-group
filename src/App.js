import React from 'react';
import {Route, Routes} from "react-router-dom";
import Services from "./page/Services";
import Catalog from "./page/Catalog";
import Work from "./page/Work";
import Clients from "./page/Clients";
import DetailServices from "./page/Services/DetailServices";
import Home from "./page/Home";
import AboutUs from "./page/AboutUs";

const App = () => {
  return (
    <div style={{paddingTop: '80px'}}>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about-us'} element={<AboutUs/>}/>
        <Route path={'/services'} element={<Services/>}/>
        <Route path={'/catalog'} element={<Catalog/>}/>
        <Route path={'/work'} element={<Work/>}/>
        <Route path={'/clients'} element={<Clients/>}/>
        <Route path={'/services/:name'} element={<DetailServices/>}/>
      </Routes>
    </div>
  );
};

export default App;