import React from 'react';
import Container from "../../ui/Container";
import InfoCardLeft from "../../components/InfoCardleft";
import Uborka1 from '../../media/service_png/uborka1.png'
import Uborka2 from '../../media/service_png/uborka2.png'
import Mebel1 from '../../media/service_png/mebel1.svg'
import Mebel2 from '../../media/service_png/mebel2.svg'
import Territory1 from '../../media/service_png/territory1.png'
import Territory2 from '../../media/service_png/uborka3.svg'
import Moika1 from '../../media/service_png/moika1.png'
import Moika2 from '../../media/service_png/moika2.png'
import Disinfection1 from '../../media/service_png/desintification1.svg'
import Disinfection2 from '../../media/service_png/disinfection2.svg'
import ApplicationGirl from '../../media/service_png/application-girl.svg'
import InfoCardRight from "../../components/InfoCardRight";
import ApplicationPhone from "../../components/ApplicationPhone";
import Sponsors from "../../ui/Sponsors";
import ApplicationForm from "../../components/ApplicationForm";

const Services = () => {
  return (
    <>
      <div id='services'>
        <Container>
          <h1 className={'services--title'}>Наши услуги</h1>
        </Container>
        <div className='empty-place'>Place for image</div>
      </div>
      <InfoCardLeft
        img1={Uborka1}
        img2={Uborka2}
        title={'Уборка внутренних \n' + 'помещений'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros. Fusce imperdiet id nisi quis pretium. In eget diam quis mi semper gravida. Ut fringilla pellentesque enim a placerat. '}
      />
      <InfoCardRight
        img1={Mebel1}
        img2={Mebel2}
        title={'Химчистка мебели \n' + 'и ковролина'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros. Fusce imperdiet id nisi quis pretium. In eget diam quis mi semper gravida. Ut fringilla pellentesque enim a placerat. '}
      />
      <InfoCardLeft
        img1={Territory1}
        img2={Territory2}
        title={'Уборка территорий'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros. Fusce imperdiet id nisi quis pretium. In eget diam quis mi semper gravida. Ut fringilla pellentesque enim a placerat. '}
      />
      <InfoCardRight
        img1={Moika1}
        img2={Moika2}
        title={'Мойка фасада и окон'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros. Fusce imperdiet id nisi quis pretium. In eget diam quis mi semper gravida. Ut fringilla pellentesque enim a placerat. '}
      />
      <InfoCardLeft
        img1={Disinfection1}
        img2={Disinfection2}
        title={'Дезинфекция \n' + 'и дезинсекция \n' + 'коммерческих помещений'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros. Fusce imperdiet id nisi quis pretium. In eget diam quis mi semper gravida. Ut fringilla pellentesque enim a placerat. '}
      />

      <ApplicationPhone image={ApplicationGirl}/>
      <Sponsors/>
      <ApplicationForm/>
    </>
  );
};

export default Services;