import React from 'react';
import CoverCatalog from "./component/CoverCatalog";
import Equipments from "./component/Equipments";
import ApplicationPhone from "../../components/ApplicationPhone";
import BigVacuum from '../../media/img/vacuumBig.svg'

const Catalog = () => {
  return (
    <div id='catalog'>
      <CoverCatalog/>
      <Equipments/>
      <ApplicationPhone image={BigVacuum}/>
    </div>
  );
};

export default Catalog;