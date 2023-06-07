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
  const coords = [0, 130, 330, WIDTH / 2, WIDTH - 330, WIDTH - 130, WIDTH-4]
  const onDropUp = () => {
    setDropUp(false)
  }
  const onDropDown = () => {
    setDropUp(true)
  }

  const onMouseMove = (event) => {
    // if (true) {
      setWidthDirty(window.innerWidth - event.clientX)
      setLastCoordinate(prev => [...prev, event.clientX])
      if (lastCoordinate.length > 1){
        lastCoordinate.shift()
         setArrowRight(lastCoordinate[0] < lastCoordinate[1])
      }
    // }
  }

  return (
    <div id='cover'>
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
      <div className='blur-window'>
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