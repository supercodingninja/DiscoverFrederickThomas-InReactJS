/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
// import './devicon.css';
import Aboutcard from './AboutCard';
import Github from './Github';
import Techstack from './Techstack';

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

        {/* Reach out to network and get stack to appear.  Use empty placeholders, for now. */}
        {/* See Ref. https://stackshare.io/stacks */}
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
          <Techstack iconName='devicon-javascript-plain ' />
          <Techstack iconName='devicon-nodejs-plain-wordmark ' />
          <Techstack iconName='devicon-express-original-wordmark' />
          <Techstack iconName='devicon-react-original-wordmark' />
          <Techstack iconName='devicon-mongodb-plain-wordmark' />
          <Techstack iconName='devicon-git-plain-wordmark' />
          <Techstack iconName='devicon-bootstrap-plain-wordmark' />
        </Row>
        <h1 className='project-heading'>
          <strong className='blue'>Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
          <Techstack iconName='devicon-visualstudio-plain-wordmark' />
          <Techstack iconName='devicon-photoshop-line' />
          <Techstack iconName='devicon-heroku-line-wordmark' />
        </Row>
        <Github />

        <a 
        href='#'
        className='to-top
        '>Back to top</a>
      </Container>
    </Container>
  );
}

export default About;