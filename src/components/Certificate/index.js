import React from 'react';
import Container from "../../ui/Container";
import Slider from 'react-slick'
import CertificateImg from "../../media/img/certificate.jpg"
import Fancybox from "./Fancybox";

const data = [CertificateImg, CertificateImg,CertificateImg,CertificateImg,CertificateImg,CertificateImg,CertificateImg,CertificateImg]

const Certificate = () => {



  const settings = {
    dots: true,
    // speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "400px",
    infinite: true,
    className: 'center',
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "200px",
          infinite: true,
          className: 'center',

        }
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          dots: false,
          centerMode: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "100px",
          className: 'center',
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div id='certificate'>
      <Container>
       <div className='certificate'>
         <div className='certificate--title'>
           <h1>О нас словами наших клиентов</h1>
           <span>Показать все</span>
         </div>
         <Fancybox
           options={{
             Carousel: {
               infinite: false,
             },
           }}
         >
           <Slider {...settings}>
             {data.map(image => (
               <a className='certificate--image' data-fancybox="gallery" href={image}>
                 <img src={image} alt="" width={300}/>
               </a>
             ))}
           </Slider>
         </Fancybox>
       </div>
      </Container>
    </div>
  );
};

export default Certificate;