import React from 'react';
import Slider from "react-slick";
import Proraba from '../../media/img/proraba.svg'
import Beeline from '../../media/img/beeline.svg'
import Novotel from '../../media/img/novotel.svg'
import Frunze from '../../media/img/frunze.svg'

export const sponsors = [
  {
    id: 1,
    icon:Proraba
  },
  {
    id: 2,
    icon:Beeline
  },
  {
    id: 3,
    icon:Novotel
  },
  {
    id: 4,
    icon:Proraba
  },
  {
    id: 5,
    icon:Beeline
  },
]

const Sponsors = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 1800,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div id='sponsors'>
      <div className="sponsor-container">
        <Slider {...settings}>
          {
            sponsors.map(s => (
              <div className='s-icon' key={s.id}>
                <img src={ s.icon } alt=""/>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Sponsors;