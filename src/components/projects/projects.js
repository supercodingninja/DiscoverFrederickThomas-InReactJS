'use strict';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Project from './ProjectCards';
import fbCard from './BlogsCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';

import cr from '../../Assets/Projects/cr.png';
import codePen from '../../Assets/Projects/codePen.png';
import CV from '../../Assets/Projects/CV.png';
import Joia from '../../Assets/Projects/Joia.jpg';
import KJV from '../../Assets/Projects/KJV.png';
import mct from '../../Assets/Projects/mct.png';
import NASA from '../../Assets/Projects/Nasa.png';
import nt from '../../Assets/Projects/nt.png';
import order from '../../Assets/Projects/order.png';
import pg from '../../Assets/Projects/pg.png';
import rmg from '../../Assets/Projects/rmg.png';
import scn from '../../Assets/Projects/scn.png';
import SCNfb from '../../Assets/Projects/SCNfb.png';
import start from '../../Assets/Projects/start.png';
import team from '../../Assets/Projects/team.png';
import WFW from '../../Assets/Projects/WFW.png';


function myProjects() {
  
  return (
  
    <Container fluid className='pro-section'>
      <Particle />
      <Container>
        <h1 className='pro-heading'>
          The <strong className='blue'>Works</strong>
        </h1>

        <p style={{ color: 'white' }}>
          Here are some of my <strong className='blue'>favorite projects</strong>, in various dispensations.  I hope you enjoy viewing my growth as I have (it truly is <strong className='blue'>exciting</strong>)!
        </p>


        {/* My Projects */}
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='pro-card'>
            <Project
              imgPath={cr}
              isBlog={false}
              title=''
              description='eeoifhrohroh4rogh4o'
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={codePen}
              isBlog={false}
              title=''
              description='eeoifhrohroh4rogh4o'
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={CV}
              isBlog={false}
              title=''
              description='l3hf3hf3h3h4h4h4o4hg4'
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={Joia}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={mct}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={NASA}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={nt}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={order}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={pg}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={rmg}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={scn}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col>


            <Col md={4} className='pro-card'>
              <Project
                imgPath={start}
                isBlog={false}
                title=''
                description=''
                link=''
              />
            </Col>

          
          <Col md={4} className='pro-card'>
            <Project
              imgPath={team}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col>
     
     
          {/* Placeholders for future projects I desire to include (not finished with assignments, yet). */}


          {/* <Col md={4} className='pro-card'>
            <Project
              imgPath={team}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col> */}


          {/* <Col md={4} className='pro-card'>
            <Project
              imgPath={team}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col> */}
        </Row>


        {/* Mentioning Facebook: for more views and exposure; andcredibility.  I'm still having trouble getting the information to populate; therefore, I change all Facebook content to proCards. */}
        <h1 className='pro-heading'>
          My Recent <strong className='blue'>Facebook </strong> Posts
        </h1>
        
        <p style={{ color: 'white' }}>Check me out!</p>
        
        {/* <Row style={{ justifyContent: 'center' }}>
          <Col md={9} className='fb-card fb-card-view'>
            <fbCards
              imgPath={KJV}
              title=''
              site=''
              link=''
            />
          </Col> */}


          {/* <Col md={4} className='fb-card fb-card-view'>
            <fbCards
              imgPath={SCNfb}
              title='Super Coding Ninja'
              site='https://www.facebook.com'
              description="This page is to help anyone desiring to code: no matter what background.  C'mon Devs (developers), let's get coding! "
              link='https://www.facebook.com/SuperCodingNinja'
            />
          </Col> */}


          {/* <Col md={4} className='fb-card fb-card-view'>
            <fbCards
              imgPath={WFW}
              title=',vkffk'
              site=''
              link=''
            />
          </Col> */}


<         Row style={{ justifyContent: 'center' }}>
          <Col md={9} className='pro-card'>
            <Project
              imgPath={KJV}
              title=''
              site=''
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={SCNfb}
              title='Super Coding Ninja'
              site='https://www.facebook.com'
              description="This page is to help anyone desiring to code: no matter what background.  C'mon Devs (developers), let's get coding! "
              link='https://www.facebook.com/SuperCodingNinja'
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={WFW}
              title=',vkffk'
              site=''
              link=''
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default myProjects;