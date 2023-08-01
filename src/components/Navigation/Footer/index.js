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