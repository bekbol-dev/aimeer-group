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

const descriptionList = <div>
  <ul style={{marginLeft: '20px'}}>
    <li>Ежедневный клининг в течение рабочего дня</li>
    <li>Послеремонтная уборка</li>
    <li>Генеральная уборка</li>
  </ul>
  <p style={{marginTop: '15px'}}>Поддержание рабочего места в чистоте и порядке является важной частью обеспечения производительности и эффективности
    на рабочем месте.
    А мы в свою очередь Полностью возьмем на себя организацию всего цикла
    уборки и предоставления рабочего персонала.
    Профессиональная уборка коммерческих помещений выполняется с соблюдением санитарно-гигиенических норм
    и помогает продлить срок службы напольных покрытий, мебели и техники.</p>
</div>

const descriptionEpart = <div>
<p>Компания «АйМээр Групп» оказывает услуги по дезинсекции, дератизации и дезинфекции в Бишкеке и других регионов Кыргызстана.
  Дезинсекция – ликвидация насекомых: тараканов, клещей, муравьев, блох, клопов и др.
  Дератизация – профессиональное истребление опасных грызунов, крыс, мышей, кротов и др. на любых площадях, частных и производственных объектах;
  Дезинфекция –уничтожение грибков, вирусов, микроорганизмов, очистка воздуха, вентиляционных систем, обеззараживание помещений после больных и умерших;
</p>
  <h3>Все работы выполняются:</h3>
  <ul style={{margin: '10px 0 0 20px'}}>
    <li>оперативно;</li>
    <li>с гарантией;</li>
    <li>с применением средств, безопасных для человека и животных;</li>
    <li>•	абсолютно конфиденциально.</li>
  </ul>
</div>

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
        description={descriptionList}
      />
      <InfoCardRight
        img1={Mebel1}
        img2={Mebel2}
        title={'Химчистка мебели \n' + 'и ковролина'}
        description={'Восстановите красоту ваших ковров и мебели с помощью профессиональных услуг химчистки. \n' +
          'Обученная команда специалистов справится с большим объемом работ и любой степенью загрязнения. Мы используем специализированное оборудование, эффективные и безопасные чистящие средства для любой степени загрязнения.'}
      />
      <InfoCardLeft
        img1={Territory1}
        img2={Territory2}
        title={'Уборка территорий'}
        description={'Мы оказываем профессиональные услуги по уборке прилегающих территорий, чтобы прилегающие территории оставались чистыми и гигиеничными. В наши услуги входит уборка всех газонов и зеленых насаждений, парковок в любое время года, уборка снега, обслуживание мусорных баков и многое другое. Мы предлагаем качественные услуги, адаптированные к индивидуальным потребностям каждого клиента, чтобы вы могли наслаждаться чистой окружающей средой. Благодаря нашему опыту в уборке территорий, вы можете доверить нам поддержание порядка и безопасности ваших близких.'}
      />
      <InfoCardRight
        img1={Moika1}
        img2={Moika2}
        title={'Мойка фасада и окон'}
        description={'Мойка фасадов и окон является важной частью любого плана технического обслуживания здания, поскольку оно помогает поддерживать внешний вид в наилучшем виде.\n' +
          'Наши Сертифицированные профессиональные альпинисты, прошедшие специальную подготовку, обеспечат качественные результаты для наших клиентов, защищая их от потенциальных рисков.\n'}
      />
      <InfoCardLeft
        img1={Disinfection1}
        img2={Disinfection2}
        title={'Дезинфекция \n' + 'и дезинсекция \n' + 'коммерческих помещений'}
        description={descriptionEpart}
      />

      {/*<ApplicationPhone image={ApplicationGirl}/>*/}
      <Sponsors/>
      <ApplicationForm/>
    </>
  );
};

export default Services;