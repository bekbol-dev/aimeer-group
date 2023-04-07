import React, {useState} from 'react';
import Container from "../../../../ui/Container";
import BG from '../../../../media/img/vacuum-bg.png'
import BGG from '../../../../media/img/clean.png'
import {GoPrimitiveDot} from "react-icons/go";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

const catalogSlide = [
  {
    id: 1,
    image: BG,
    brand: 'Karcher NT 360',
    subtitle: 'Хозяйственный пылесос'
  },
  {
    id: 2,
    image: BGG,
    brand: 'Samsung Vacuum',
    subtitle: 'пылесос'
  },
  {
    id: 3,
    image: BG,
    brand: 'Apple 31 Vacuum',
    subtitle: 'VIP пылесос'
  },
]

const CoverCatalog = () => {
  const [currentSlide, setCurrentSlide] = useState(catalogSlide[0])
  const slickNext = () => {
    const catalog = catalogSlide.find(c => c.id === currentSlide.id+1)
    if (currentSlide.id < catalogSlide[catalogSlide.length-1].id){
      setCurrentSlide(catalog)
    }
  }
  const slickPrev = () => {
    const catalog = catalogSlide.find(c => c.id === currentSlide.id-1)
    if (currentSlide.id > catalogSlide[0].id){
      setCurrentSlide(catalog)
    }
  }

  return (
    <div id='cover-catalog'>
      <Container>
        <div className='cover-catalog--titles'>
          <h1>Каталог оборудования</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</p>
        </div>
      </Container>


      <section style={{
        background: `url("${currentSlide.image}") no-repeat center/cover`,
      }}
      className={'slide-image'}>
        <div className='slide-image--description'>
          <h1>{currentSlide.brand}</h1>
          <h3>{currentSlide.subtitle}</h3>
        </div>
      </section>
      <Container>
        <div className='slides--dots'>
         <span
           onClick={slickPrev}
           className='slides--dots--arrow'> <MdKeyboardArrowLeft/> </span>
            {catalogSlide.map(dots => (
             <span key={dots.id}>
               <GoPrimitiveDot style={{
                 color: dots.id === currentSlide.id ? '#2AB057' : '#ACACAC',
                 cursor: 'pointer',
                 margin: '0 3px'
               }}
               onClick={() => setCurrentSlide(dots)}
               />
             </span>
            ))}
          <span
            onClick={slickNext}
            className='slides--dots--arrow'> <MdKeyboardArrowRight/> </span>
        </div>
      </Container>
    </div>
  );
};

export default CoverCatalog;