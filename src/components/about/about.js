import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
// import './devicon.css';
import Aboutcard from './aboutCard';
import Github from './GitHub';
import Techstack from './Techstack';

// USE TECH STACK APPROACH, INSTEAD OF EVERYTHING YOU'VE DONE. //
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codeWars from '../../Assets/icons/codeWars.jpeg';
// import gitHub from '../../Assets/icons/gitHub-grad.jpeg';
// import outlook from '../../Assets/icons/iconfinder_74-outlook_4202101.png';
// import codePen from '../../Assets/iconfinder_LinkedIn-social-media-logo_2220673.png';
// import codePen from '../../Assets/icons/iconfinder_Microsoft_Office-07_6296671.png';
// import codePen from '../../Assets/icons/OperationCode.png';
// import codePen from '../../Assets/icons/YouTube.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
// import codePen from '../../Assets/icons/codePen_Button-Fill-White-Large.png';
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
          <Techstack iconName='cib-visual-studio-code' />
          <Techstack iconName='cib-postman' />
          <Techstack iconName='cib-heroku' />
        </Row>
        <Github />

        <a 
          href="/#"
          className="to-top"
          
        >Back to top</a>
        
      </Container>
    </Container>
  );
}

export default About;
