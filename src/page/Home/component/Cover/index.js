import React, {useEffect, useState} from 'react';
import Container from "../../../../ui/Container";
import {SlArrowRight} from "react-icons/sl";
import {useDebounce} from "../../../../hooks/debounced";

const Cover = () => {
  const WIDTH = window.innerWidth
  const [widthDirty, setWidthDirty] = useState(WIDTH)
  const [arrowShow, setArrowShow] = useState(false)
  const [lastCoordinate, setLastCoordinate] = useState([])
  const [arrowToRight, setArrowRight] = useState(true)
  const [dropUp, setDropUp] = useState(false)
  const debounced = useDebounce(arrowToRight)
  const coords = [0, 150, 350, WIDTH / 2, WIDTH - 350, WIDTH - 150, WIDTH-4]
  const onDropUp = () => {
    setDropUp(false)
  }
  const onDropDown = () => {
    setDropUp(true)
  }

  const onMouseMove = (event) => {
    if (dropUp) {
      setWidthDirty(window.innerWidth - event.clientX)
      setLastCoordinate(prev => [...prev, event.clientX])
      if (lastCoordinate.length > 1){
        lastCoordinate.shift()
         setArrowRight(lastCoordinate[0] < lastCoordinate[1])
      }
    }
  }

  return (
    <div id='cover'
         onMouseUp={onDropUp}
         onMouseMove={onMouseMove}
         onMouseOver={() => setArrowShow(true)}
         onMouseLeave={() => setTimeout(() => setArrowShow(false), 500)}
    >
      {
        coords.map((coordinates,idx) => (
          <div
            style={{
              left: coordinates + 'px',
            }}
            key={coordinates}
            className={`coordinates coordinate${idx+1}`}></div>
        ))
      }
      <div style={{
        width: widthDirty + 'px',
      }} className='blur-window'>
        <div className='blur-window--layer'>
          { arrowShow && <div
              onMouseDown={onDropDown}
              onMouseUp={onDropUp}
              style={{
                transform: debounced ? "rotate(0)" : "rotate(180deg)",
                left: lastCoordinate[0] > 30 ? '-25px' : '0'
              }}
              className='arrow-icon'>
              <SlArrowRight/>
            </div> }
        </div>
      </div>
      <Container>
        <div className='cover'>
          <h1>Профессиональные клининговые услуги
            <span>в Бишкеке</span></h1>
        </div>
      </Container>
    </div>
  );
};

export default Cover;