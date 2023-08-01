import React from 'react';
import Sponsors from "../../ui/Sponsors";
import ApplicationForm from "../../components/ApplicationForm";
import Cover from "./component/Cover";
import Reviews from "../../components/Reviews";
import OurServices from "../../components/OurServices";
import InfoCardLeft from "../../components/InfoCardleft";
import Company1 from '../../media/img/aboutCompany1.png'
import Company2 from '../../media/img/aboutCompany2.png'
import NumbersStatic from "./component/NumbersStatic";
import Certificate from "../../components/Certificate";

const Home = () => {
  return (
    <div id='home'>
      <Cover/>
      <InfoCardLeft
        img1={Company1}
        img2={Company2}
        title={'О нашей компании'}
        description={<div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start'
        }}>
          <span><b>Компания «Aimeer Group»</b> – это профессиональный клининг коммерческих помещений.</span>
          <span style={{margin: '10px 0 20px 0'}}>Мы поддерживаем ваше пространство в чистоте и порядке, чтобы вы могли сосредоточиться на том,
            что важно. AiMeer Group предоставляет первоклассные услуги по уборке коммерческих помещений
            с использованием профессиональных инструментов, инвентаря и оборудования. Мы работаем на
            любых площадях и с любыми загрязнениями, готовы качественно навести чистоту на тысячах квадратных метров.</span>
          <span>«Aimeer Group» – чистота, качество, оперативность.</span>
        </div>
        }
      />
      <NumbersStatic/>
      <Sponsors/>
      <Certificate/>
      <OurServices title={'Наши услуги'}/>
      <ApplicationForm/>
    </div>
  );
};

export default Home;