import React from 'react';
import {Route, Routes} from "react-router-dom";
import Services from "./page/Services";
import Catalog from "./page/Catalog";
import Work from "./page/Work";
import Clients from "./page/Clients";
import DetailServices from "./page/Services/DetailServices";
import Home from "./page/Home";
import AboutUs from "./page/AboutUs";
import ViewMore from "./components/Certificate/ViewMore";

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
        <Route path={'/services-des'} element={<DetailServices/>}/>
        <Route path={'/all-certificates'} element={<ViewMore/>}/>
      </Routes>
    </div>
  );
};

export default App;