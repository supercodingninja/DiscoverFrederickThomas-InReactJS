'use strict';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Github from './Github';
import theGuyInTheChair from './theGuyInTheChair';
import Aboutcard from './AboutCard';
import cute from '../../Assets/images/t1.jpeg';

function About() {
  return (
    <Container fluid className='about-section'>
      <Particle />

      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              More Than A Survivor, I Am<strong className='blue'>&nbsp;Victorious</strong>!
            </h1>
            <Aboutcard />
          </Col>
          

          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className='about-img'
          >
            <img src={cute} alt='about' className='img-fluid' />
          </Col>
        </Row>

        <h1 className='project-heading'>
          Professional <strong className='blue'>Skillset </strong>
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
          <theGuyInTheChair iconName='devicon-cplusplus-line' />
          <theGuyInTheChair iconName='devicon-python-plain-wordmark ' />
          <theGuyInTheChair iconName='cib-pytorch' />
          <theGuyInTheChair iconName='cib-tensorflow' />
          <theGuyInTheChair iconName='devicon-javascript-plain ' />
          <theGuyInTheChair iconName='devicon-nodejs-plain-wordmark ' />
          <theGuyInTheChair iconName='devicon-express-original-wordmark' />
          <theGuyInTheChair iconName='devicon-react-original-wordmark' />
          <theGuyInTheChair iconName='devicon-mongodb-plain-wordmark' />
          <theGuyInTheChair iconName='devicon-git-plain-wordmark' />
          <theGuyInTheChair iconName='devicon-bootstrap-plain-wordmark' />
        </Row>
        <h1 className='project-heading'>
          <strong className='blue'>Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
          <theGuyInTheChair iconName='devicon-linux-plain' />
          <theGuyInTheChair iconName='cib-visual-studio-code' />
          <theGuyInTheChair iconName='cib-anaconda' />
          <theGuyInTheChair iconName='cib-postman' />
          <theGuyInTheChair iconName='cib-zeit' />
          <theGuyInTheChair iconName='cib-heroku' />
        </Row>
        <Github />

        <a href="#" class="to-top">Back to top</a>
      </Container>
    </Container>
  );
}

export default About;