import React from 'react';
import LOGO from "../../../media/img/Logo.svg";
import {Link, NavLink} from "react-router-dom";
import Button from "../../../ui/Button";

const header_navigate = [
  {
    path: '/about-us',
    text: 'О нас',
  },
  {
    path: '/services',
    text: 'Услуги',
  },
  {
    path: '/catalog',
    text: 'Каталог оборудования',
  },
  {
    path: '/work',
    text: 'Работа с нами',
  },
  {
    path: '/clients',
    text: 'Клиенты',
  },
]

const HeaderNav = ({btn}) => {
  return (
    <div className='header'>
      <Link to={'/'}>
        <img src={LOGO} alt=""/>
      </Link>
      <nav>
        {
          header_navigate.map(n => (
            <NavLink key={n.path} to={n.path}>{n.text}</NavLink>
          ))
        }
      </nav>
      <div className='header-adapting-menu'>
        {
          header_navigate.map(n => (
            <NavLink key={n.path} to={n.path}>{n.text}</NavLink>
          ))
        }
        <div className='rectangle'>
          <div className='rectangle--1'/>
          <div className='rectangle--2'/>
        </div>
      </div>
      <div className='header-btn'>
        <Button
          children={btn}
          fontSize={16}/>
      </div>
      <div className='header-burger'>
        <div className='header-burger--item'/>
        <div className='header-burger--item'/>
        <div className='header-burger--item'/>
      </div>
    </div>
  );
};

export default HeaderNav;