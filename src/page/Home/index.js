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
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros. Fusce imperdiet id nisi quis pretium. In eget diam quis mi semper gravida. Ut fringilla pellentesque enim a placerat.</span>
          <span style={{margin: '30px 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros.</span>
        </div>
          }
      />
      <NumbersStatic/>
      <Sponsors/>
      <Reviews/>
      <OurServices title={'Наши услуги'}/>
      <ApplicationForm/>
    </div>
  );
};

export default Home;