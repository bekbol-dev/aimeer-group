import React from 'react';
import Container from "../../../../ui/Container";
import Vacuum from '../../../../media/img/vacuum.svg'

const equipments = [
  {
    id:1,
    image: Vacuum,
    name: 'Karcher NT 360',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse ',
  },
  {
    id:2,
    image: Vacuum,
    name: 'Karcher NT 360',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse ',
  },
  {
    id:3,
    image: Vacuum,
    name: 'Karcher NT 360',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse ',
  },
  {
    id:4,
    image: Vacuum,
    name: 'Karcher NT 360',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse ',
  },
]

const Equipments = () => {
  return (
    <div id='equipments'>
      <Container>
        <div className='equipments'>
          <div className='equipments--titles'>
            <h1>Каталог оборудования</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</p>
          </div>

          <div className='equipments--list'>
            {
              equipments.map(el => (
                <div key={el.id}
                     className='equipments--list--card'>
                  <div className='equipments--list--card--image'>
                    <img src={el.image} alt=""/>
                  </div>
                  <h3>{el.name}</h3>
                  <p>{el.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Equipments;