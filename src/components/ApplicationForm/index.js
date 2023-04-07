import React from 'react';
import Container from "../../ui/Container";
import {BsTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const ApplicationForm = () => {
  return (
    <>
      <Container>
        <div className='feedback-titles'>
          <h1>Доверьтесь нашей команде,</h1>
          <h2>нас выбирают лучшие</h2>
        </div>
      </Container>
      <div id='feedback'>
        <Container>
          <div className="feedback">
            <div className='feedback-box'>
              <div className='feedback-box--contacts'>
                <h1>Контакты</h1>
                <a href='tel:+996 556 26 30 16'>
                  <span><BsTelephoneFill/></span>
                  <h4>+996 556 26 30 16</h4>
                </a>
                <a href='tel:0550302355'>
                  <span><BsTelephoneFill/></span>
                  <h4>0550302355</h4>
                </a>
                <a href='mailto:limpio.bishkek@gmail.com'>
                  <span><MdEmail/></span>
                  <h4>limpio.bishkek@gmail.com</h4>
                </a>
              </div>
              <div className='feedback-box--form'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim
                  ac, blandit u</p>

                <Input placeholder={'Ваш телефон'}/>
                <Input type={'email'} placeholder={'Ваш email'}/>

                <Button fontSize={20}>Отправить&nbsp;заявку</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ApplicationForm;