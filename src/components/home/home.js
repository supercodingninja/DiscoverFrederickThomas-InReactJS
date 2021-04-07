import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeLogo from '../../Assets/images/headOverHeals.jpeg';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';


function Home() {
  return (
    <section>
      {/* <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a> */}

      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content myWidth'>
          <Row>
            <Col md={7} className='home-header home-section2'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                'Hello, World!' <span className='wave'>👋🏿</span>
              </h1>

              <h1 className='heading-name'>
                Discover
                <strong className='main-name'> Frederick Thomas</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>


            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt='home pic' className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <a href="#top">Back to top</a>
    </section>
  );
};

export default Home;