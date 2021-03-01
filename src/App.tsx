import React from 'react';
import FirstAndSecond from './components/FirstAndSecond';

import GlobalStyles from './styles/global'
import { Main,Section,Sticky } from './styles'
import Header from './components/Header';

function App() {
  React.useEffect(()=>{
    window.scrollTo({top: 0})
  })
  return (
    <>
    <GlobalStyles></GlobalStyles>
    <Header/>
      <Main style={{ height: '1610vh' }}> 
        <section style={{ height: '72.7%' }}>
          
          <FirstAndSecond/>
          {/* <Sticky className="first"></Sticky>
          <Sticky className="second"></Sticky> */}
        </section>
        
        <section style={{ height: '9.7%' }}>
         <Sticky className="third" />
        </section>
       
        <section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </section>
      </Main>
    </>
  );
}

export default App;
