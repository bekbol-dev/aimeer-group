import React from 'react';
import Client1 from '../../media/img/clients1.png'
import Client2 from '../../media/img/clients2.png'
import Sponsors from "../../ui/Sponsors";
import Reviews from "../../components/Reviews";
import ApplicationForm from "../../components/ApplicationForm";
import InfoCardRight from "../../components/InfoCardRight";
import Container from "../../ui/Container";

const Clients = () => {
  return (
    <>
      <Container>
        <div className='clients--titles'>
          <h1>Наши клиенты</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</p>
        </div>
      </Container>
      <div className='empty-place'>Place for image</div>
      <InfoCardRight
        img1={Client1}
        img2={Client2}
        description={'Наши клиенты – причина, по которой мы стремимся быть лучшей клининговой компанией в городе. Мы понимаем, что у наших клиентов есть особые потребности \n' +
          'и ожидания, когда речь идет о чистоте, и мы гордимся тем, что удовлетворяем эти потребности.\n' +
          '\n' +
          'Наши клиенты всегда могут рассчитывать на нас в плане надежных, эффективных и экономичных решений по уборке'}/>
      <div style={{marginTop: '5%'}}>
        <Sponsors/>
      </div>
      <Reviews/>
      <ApplicationForm/>

    </>
  );
};

export default Clients;