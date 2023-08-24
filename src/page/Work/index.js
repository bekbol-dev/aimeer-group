import React from 'react';
import Container from "../../ui/Container";
import Resume from "./component/Resume";

const Work = () => {
  return (
   <>
     <div id='work'>
       <Container>
         <div className="work">
           <div className='work--titles'>
             <h1>Работа с нами</h1>
             <p>Если вы профессионал своего дела, мы будем рады видеть вас в нашей команде!</p>
           </div>
         </div>
       </Container>
       <div className='team-image'></div>
       <Container>
         <p className='work--description'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros. Fusce imperdiet id nisi quis pretium. In eget diam quis mi semper gravida. Ut fringilla pellentesque enim a placerat.

           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim ac, blandit ut tortor. Suspendisse risus risus, bibendum et est sit amet, bibendum cursus leo. In nec placerat lectus, sed accumsan eros.
         </p>
       </Container>
     </div>


     <Resume/>
   </>
  );
};

export default Work;