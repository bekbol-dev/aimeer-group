import React from 'react';
import Container from "../../ui/Container";
import {reviews} from "./data";
import {ImQuotesLeft} from "react-icons/im";
import {AiFillStar} from "react-icons/ai";
import Slider from 'react-slick'

const pointsStar = [1, 2, 3, 4, 5]

const Reviews = () => {


  const settings = {
    // className: "center",
    dots: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "80px",
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };
  return (
    <div id='reviews'>
      <Container>
        <div className="reviews">
          <div className='reviews--title'>
            <h1>О нас словами наших клиентов</h1>
            <span>Показать все</span>
          </div>
          <Slider {...settings}>
            {
              reviews.map(review => (
                <div key={review.id} className='reviews--card'>
                  <div className='reviews--card--image'>
                    <img src={review.image} alt=""/>
                  </div>
                  <div className='reviews--card--items'>
                   <div>
                     <span> <ImQuotesLeft/> </span>
                     <div className='reviews--card--items--stars'>
                       {
                         pointsStar.map(star => (
                           <AiFillStar style={{
                             color: star <= review.points ? '#2AB057' : 'rgba(42,176,87,0.2)'
                           }}/>
                         ))
                       }
                     </div>
                   </div>
                    <p>{review.review}</p>
                    <div>
                      <h3>{review.name}</h3>
                      <h5>{review.description}</h5>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;