import React from 'react';
import Container from "../../../ui/Container";
import Disinfection1 from '../../../media/service_png/desintification1.svg'
import Disinfection2 from '../../../media/service_png/disinfection2.svg'
import DisinfectionDetail from '../../../media/service_png/detail-disinfection.jpg'
import {useParams} from "react-router-dom";
import {MdKeyboardArrowRight} from "react-icons/md";
import {GoPlus, GoPrimitiveDot} from "react-icons/go";
import OurServices from "../../../components/OurServices";
import Sponsors from "../../../ui/Sponsors";
import Reviews from "../../../components/Reviews";
import ApplicationForm from "../../../components/ApplicationForm";
const list = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse ris',
  'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
  'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
  'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
  'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
  'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
  'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
]

const disinfection = ['Мытье потолка', 'Мытье полов', 'Дезинфекция мебели', 'Стол', 'Доска']

function DetailPage(){
  return (
    <>
      <section id='detail-hero'>
        <Container>
          <div className="detail-hero">
            <div className='detail-hero--titles'>
              <h1>Дезинсекция помещений</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lor</p>
            </div>
            <div className='detail-hero--image'>
              <img src={Disinfection1} alt=""/>
              <img src={Disinfection2} alt=""/>
            </div>
          </div>
        </Container>
      </section>
      <section id='detail'>
        <Container>
          <h1 className='detail--title'>Что входит в дезинфекцию и дезинсекцию коммерческих помещений</h1>
        </Container>
        <div className='detail--image'>
          {
            disinfection.map((el,idx) => (
              <div className={`detail--image--plus plus${idx +1}`}>
                <div className='detail--image--plus--icon'><GoPlus/></div>
                <div className='detail--image--plus--desc'>
                  {el}
                </div>
              </div>
            ))
          }
        </div>
        <Container>
          <div className='detail-description'>
            <p>
              {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros. Fusce imperdiet id nisi quis pretium. In eget diam quis mi semper gravida. Ut fringilla pellentesque enim a placerat.  \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros.'}
            </p>
            <ul className='detail-description--list'>
              {
                list.map(el => (
                  <li>
                    <GoPrimitiveDot className='list-dot'/>
                    {el}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='detail-description'>
            <h1 className='detail--title'>
              Почему нужно проводить дезинфекцию
              и дезинсекцию коммерческих помещений?
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros. Fusce imperdiet id nisi quis pretium. In eget diam quis mi semper gravida. Ut fringilla pellentesque enim a placerat.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}

const DetailServices = () => {
  const params = useParams()
  return (
    <>
      <Container>
        <div className='detail-path'>
          <h5 onClick={() => window.history.back()}>Услуги</h5>
          <MdKeyboardArrowRight/>
          <p>{params.name}</p>
        </div>
      </Container>
      <DetailPage/>
      <OurServices title={'Полный комплекс услуг для вашей компании'}/>
      <Sponsors/>
      <Reviews/>
      <ApplicationForm/>
    </>
  );
};

export default DetailServices;

