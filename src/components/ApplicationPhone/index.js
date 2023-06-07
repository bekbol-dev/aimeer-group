import React from 'react';
import Container from "../../ui/Container";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const ApplicationPhone = ({image}) => {
  return (
    <div id='application'>
      <Container>
        <div className="application">
          <div className='application--items'>
            <h1>Связаться с нами</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim</p>
           <div className='application--items--inputs'>
             <input placeholder='Ваш телефон'/>
             <Button bg={'dark'} fontSize={20}>Отправить&nbsp;заявку</Button>
           </div>
          </div>
          <div className='application--image'>
            <img  src={image} alt=""/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ApplicationPhone;