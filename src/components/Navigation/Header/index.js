import React, {useEffect, useState} from 'react';
import Container from "../../../ui/Container";
import HeaderNav from "../HeaderNav";
import {Link, NavLink, useNavigate} from "react-router-dom";
import LOGO from "../../../media/img/Logo.svg";
import Button from "../../../ui/Button";
import {header_navigate} from "../data";
const Header = () => {
  const navigate = useNavigate()
  const [burger, setBurger] = useState(false)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(10)
  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    setPrevScrollPos(currentScrollPos)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  const toggleBurger = () => {
    setBurger(!burger)
  }
  const ScrollToHead = (path) => {
    window.scroll(0,0)
    setBurger(false)
    navigate(path)
  }
  return (
    <div>
      <div id="header">
        <Container>
          <div className='header'>
            <a onClick={() => ScrollToHead('/')} className={'header-logo'}>
              <img src={LOGO} alt=""/>
            </a>
            <nav>
              {
                header_navigate.map(n => (
                  <a onClick={() => ScrollToHead(n.path)} key={n.path}>{n.text}</a>
                ))
              }
            </nav>
            <a className='header-btn' href='tel:996500302355'>
              <Button
                children={'Позвонить'}
                fontSize={16}/>
            </a>
            <div onClick={toggleBurger} className={`header-burger ${burger ? 'burger-active' : ''}`}>
              <div className='header-burger--item item1'/>
              <div className='header-burger--item item2'/>
              <div className='header-burger--item item3'/>
            </div>
          </div>
        </Container>
      </div>
      <div className='header-adapting-menu'
      style={{
        transform: burger ? 'translateY(0)' : ''
      }}>
        {
          header_navigate.map(n => (
            <a onClick={() => ScrollToHead(n.path)} key={n.path}>{n.text}</a>
          ))
        }
        <div className='rectangle'>
          <div className='rectangle--1'/>
          <div className='rectangle--2'/>
        </div>
      </div>
    </div>
  );
};

export default Header;