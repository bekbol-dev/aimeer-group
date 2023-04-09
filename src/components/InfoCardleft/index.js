import React from 'react';
import Container from "../../ui/Container";
import Button from "../../ui/Button";

const InfoCardLeft = ({img1, img2, title, description,}) => {
  return (
    <div id='about'>
      <Container>
        <div className="about">
          <div className='about--images'>
            <img src={img1} alt="" className='about--images--1'/>
            <img src={img2} alt="" className='about--images--2'/>
          </div>
          <div className='about--items'>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='about--items--btn'>
              <Button fontSize={24}>Отправить&nbsp;заявку</Button>
            </div>
          </div>
        </div>


      </Container>
    </div>
  );
};

export default InfoCardLeft;