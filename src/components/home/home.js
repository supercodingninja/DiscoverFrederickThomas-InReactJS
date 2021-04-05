'use strict';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import hc from './homeContent';
import Particle from '../particles';
import Type from './type';
import logo from '../../Assets/images/headOverHeals.jpeg';


function Home() {
  return (
    <section>
      {/* Ref. https://codepen.io/pmcgriff/pen/myKGZg */}
      <a class='ca3-scroll-down-link ca3-scroll-down-arrow' data-ca3_iconfont='ETmodules' data-ca3_icon=''></a>
      
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content myWidth'>
          <Row>
            <Col md={7} className='home-header home-section2'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                <span className='wave'>'Hello, World!'👋🏿</span>
              </h1>

              <h1 className='heading-name'>
                Discover<strong className='main-name'> Frederick Thomas</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={logo} alt='home pic' className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </Container>
      <hc />

      {/* Ref. https://codepen.io/melissacabral/pen/NvmJwx */}
      <a href="#" class="to-top">Back to top</a>
    </section>
  );
};

export default Home;