import React from 'react';
import Container from "../../../ui/Container";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";

const Resume = () => {
  return (
    <div id='resume'>
      <div className='shadow-box-first'/>
      <div className='shadow-box-second'/>
      <div className='shadow-box-third'/>
      <div className='shadow-box-fourth'/>
      <Container>
        <div className="resume">
          <h1>Отправить резюме</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim</p>
          <div className='resume--params'>
            <Input placeholder='ФИО'/>
            <Input placeholder='Ваш телефон'/>
          </div>
          <div className='resume--params'>
            <Input placeholder='Позиция (опционально)'/>
            <Input placeholder='Ваше сообщение'/>
          </div>
          <div className='resume--params'>
           <Button fontSize={20} bg={'dark'}>Прикрепить резюме</Button>
           <Button fontSize={20} bg={'dark'}>Отправить форму</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;