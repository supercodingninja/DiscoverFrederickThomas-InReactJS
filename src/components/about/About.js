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

        {/* See Ref. https://devicon.dev/; and https://stackshare.io/stacks */}
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
          <Techstack iconName='devicon-aftereffects-plain'/>
          <Techstack iconName='devicon-amazonwebservices-plain-wordmark'/>
          <Techstack iconName='devicon-android-plain-wordmark'/>
          <Techstack iconName='devicon-atom-original-wordmark'/>
          <Techstack iconName='devicon-chrome-plain-wordmark' />
          <Techstack iconName='devicon-codepen-original-wordmark'/>
          <Techstack iconName='devicon-csharp-plain'/>
          <Techstack iconName='devicon-facebook-original'/>
          <Techstack iconName='devicon-figma-plain'/>
          <Techstack iconName='devicon-firefox-plain-wordmark' />
          <Techstack iconName='devicon-git-plain-wordmark'/>
          <Techstack iconName='devicon-gitlab-plain-wordmark'/>
          <Techstack iconName='devicon-googlecloud-plain-wordmark'/>
          <Techstack iconName='devicon-handlebars-plain-wordmark'/>
          <Techstack iconName='devicon-ie10-original'/>
          <Techstack iconName='devicon-illustrator-line'/>
          <Techstack iconName='devicon-ionic-original-wordmark'/>
          <Techstack iconName='devicon-java-plain-wordmark'/>
          <Techstack iconName='devicon-javascript-plain'/>
          <Techstack iconName='devicon-jquery-plain-wordmark'/>
          <Techstack iconName='devicon-linkedin-plain-wordmark'/>
          <Techstack iconName='devicon-materialui-plain'/>
          <Techstack iconName='devicon-mysql-plain-wordmark'/>
          <Techstack iconName='devicon-npm-original-wordmark'/>
          <Techstack iconName='devicon-dot-net-plain-wordmark' />
          {/* <Techstack iconName='devicon-objectivec-plain'/> */}
          <Techstack iconName='devicon-oracle-plain'/>
          <Techstack iconName='devicon-python-plain-wordmark'/>
          <Techstack iconName='devicon-safari-plain-wordmark'/>
          <Techstack iconName='devicon-sass-original'/>
          <Techstack iconName='devicon-travis-plain-wordmark'/>
          <Techstack iconName='devicon-twitter-original'/>
          <Techstack iconName='devicon-typescript-plain'/>
          <Techstack iconName='devicon-ubuntu-plain-wordmark'/>
          <Techstack iconName='devicon-windows8-original'/>
          <Techstack iconName='devicon-wordpress-plain-wordmark'/>
          <Techstack iconName='devicon-xd-line'/>
        </Row>

        <h1 className='project-heading'>
          <strong className='blue'>Tools</strong> I use
        </h1>

        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
          <Techstack iconName='devicon-bootstrap-plain-wordmark'/>
          <Techstack iconName='devicon-css3-plain-wordmark'/>
          <Techstack iconName='devicon-devicon-plain-wordmark'/>
          <Techstack iconName='devicon-express-original-wordmark'/>
          <Techstack iconName='devicon-github-original-wordmark'/>
          <Techstack iconName='devicon-heroku-line-wordmark'/>
          <Techstack iconName='devicon-html5-plain-wordmark'/>
          <Techstack iconName='devicon-mongodb-plain-wordmark'/>
          <Techstack iconName='devicon-nodejs-plain-wordmark'/>
          <Techstack iconName='devicon-photoshop-line'/>
          <Techstack iconName='devicon-react-original-wordmark'/>
          <Techstack iconName='devicon-slack-plain-wordmark'/>
          <Techstack iconName='devicon-visualstudio-plain-wordmark'/>
          <Techstack iconName='devicon-webpack-plain-wordmark'/>
        </Row>
        
        <Github />
      </Container>
    </Container>
  );
}

export default About;