import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCertificate} from "./CertificateReducer/certificateActions";
import Loader from "../Loader";
import Fancybox from "./Fancybox";
import Container from "../../ui/Container";

const ViewMore = () => {
  const dispatch = useDispatch()
  const {certificates, isError, isLoading} = useSelector(state => state.certificateReducer)
  useEffect(() => {
    dispatch(getCertificate())
  }, [])
  return (
    <div id='view-more'>
     <Container>
       {isLoading && <Loader/>}
       {!isLoading && <Fancybox
         options={{
           Carousel: {
             infinite: true,
           },
         }}
       >
         <div className='view-more'>
           {certificates.map(el => (
             <a key={el.id} data-fancybox="gallery" href={el.image}>
               <img src={el.image} alt="" width={300}/>
             </a>
           ))}
         </div>
       </Fancybox>}
     </Container>
    </div>
  );
};

export default ViewMore;