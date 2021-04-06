import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            I've been well-off, poor; and even homelss.  I am <span className='blue'>USMC War Veteran</span> My name is <span className='blue'>Frederick Thomas</span>; and I purpose to change my world!
          </p>

          <p>
            I recentyly survived an extremely rare disease (non-contagious); and shortly after, I battled COVID-19 (all during my Coding Bootcamp curriclum.  I <span className='blue'>never gave up</span>!  My father refers to me as "a fighting caterpillar"; because a caterpiller has to fight it's way out of the cocoon it spun (like humans, it has to get itself out the mess it put itself in).  <span className='blue'>I</span> fought and <span className='blue'>Won</span>:
          </p>


          <ul>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'>&nbsp;&nbsp;&nbsp;I built a strong network.</i>
            </li>

    
            <li className='about-activity'>
              <i className='far fa-hand-point-right'>&nbsp;&nbsp;&nbsp;I learned to read and implement documentation.</i>
            </li>


            <li className='about-activity'>
              <i className='far fa-hand-point-right'>&nbsp;&nbsp;&nbsp;I "learned to learn," there's always a new language or tool (stay<br>
              </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;up-to-date vs. being in need for an update).</i>
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: '#27268f', textShadow: '0px 1px 0px #dfb26a' }}>
          'Game-plan:' Clear, Focused, Thorough: 'Gather the facts, Analyze the facts, Make a plan; and Execute it triumphantly- THAT'S HOW YOU WIN A G.A.M.E!'{' '}
          </p>
          <footer className='blockquote-footer' style={{ color: '#27268f', textShadow: '0px 1px 0px #dfb26a' }}>Bronze Star Recipient Sergeant First Class Frederick D. Thomas, Sr., Retired U.S. Army</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;