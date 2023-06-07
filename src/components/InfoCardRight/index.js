import React from 'react';
import Container from "../../ui/Container";

const InfoCardRight = ({img1, img2, title='', description}) => {
  return (
    <div id='clients'>
      <Container>
          <div className='clients'>
            <div className='clients--application'>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className='clients--images'>
              <img src={img1} alt="" className='clients--images--1'/>
              <img src={img2} alt="" className='clients--images--2'/>
            </div>
          </div>
      </Container>
    </div>
  );
};

export default InfoCardRight;