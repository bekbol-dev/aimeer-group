import React from 'react';
import Container from "../../../../ui/Container";

const NumbersStatic = () => {
  return (
    <Container>
      <div className='numbers'>
        <div>
          <h1>100&nbsp;000м<sup>2</sup></h1>
          <p>Ежедневно наводим чистоту на более чем 100 000м2</p>
        </div>
        <div>
          <h1>40+</h1>
          <p>Обслуживаем более 40 компаний по всему Кыргызстану</p>
        </div>
        <div>
          <h1>7+</h1>
          <p>На рынке услуг более 7 лет</p>
        </div>
      </div>
    </Container>
  );
};

export default NumbersStatic;