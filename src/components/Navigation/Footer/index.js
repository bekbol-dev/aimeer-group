import React from 'react';
import Container from "../../../ui/Container";
import {Link, NavLink} from "react-router-dom";
import LOGO from "../../../media/img/Logo.svg";
import {header_navigate} from "../data";
import Button from "../../../ui/Button";

const Footer = () => {
  return (
    <div id='footer'>
      <Container>
        <div className="footer">
          <div className='header'>
            <Link to={'/'} className={'header-logo'}>
              <img width={250} src={LOGO} alt=""/>
            </Link>
            <nav>
              {
                header_navigate.map(n => (
                  <NavLink key={n.path} to={n.path}>{n.text}</NavLink>
                ))
              }
            </nav>
            <div className='footer-btn'>
              <Button fontSize={16}>Быстрая&nbsp;заявка</Button>
            </div>
          </div>
          <div className='footer--items'>
            <p>Политика конфиденциальности</p>
            <p>Все права защищены © 2023</p>
            <a href='#'>uniondesign.ae</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;