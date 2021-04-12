import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import champion from "../../Assets/images/CHAMPION.jpeg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function homeContent() {
  
  return (
    
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            
            <h1 style={{ fontSize: "2.6em" }}>
              <u><i>Who<span className="blue"> Am</span> I</i></u>
            </h1>
           
           {/* TRY TO MAKE THIS <div> IT'S OWN PARALLAX SCROLL SECTION!!! */}
            <div className="home-about-body grabbingDpromises">
              <p>
                Some people are born with greatness- others, greatness is thrust upon them; but I just seek to bring out the greatness of my team,<i><b className="blue">&nbsp;by being my greatest, daily</b></i>.  Just hover and dance with the image; and imagine you holding the trophy- do you feel like a winner: do you realize "greatness is within you."- Les Brown
              </p>

              <div className="parallax"></div>
                
              <p>
                I love motivating people; and <b className="blue">Changing My World, Daily</b>.  I learn new customs in other cultures and common phrases of other languages.  I also like playing football, rugby, soccer, and hockey.  I learn wrestling and mixed martial arts. I practice home defense, safely; and uphold the highest standards, possible. I like watching skydivers and extreme sports.
              </p>
              
              <div className="parallax"></div>
                
              <p>
                You know that you like me; and you're looking for a reason to hire me.  I do <i><b className="blue">not</b></i> know everything; and I'm <u>willing to learn</u><b> everything</b> the team needs me to learn.  The worst mistake that anyone and everyone has made,<i><b className="blue"> is not taking a chance on someone</b></i> or something that you know you should; and the worst decisions are never taking a chance at all.
              </p>

              <div className="parallax"></div>
              
              <p>
                I live my life; and I love it: I don't let social or political extremes, nor norms dictate how I live; because I have<i><b className="blue"> a moral compass</b></i>, which causes me to naturally treat my fellow person with respect, as I believe GOD desires.  I'm well-versed: I love playing various types of saxophones; especially for GOD!  I sing casually and formally; and although, many would say I'm extroverted, my MBTI states otherwise.  I just believe that <i><b className="blue">YOU CAN</b></i> be who you <i><b className="blue">desire</b></i> to be.  it's all up to you, and I, is it not: it is.  
              </p>
            </div>
          </Col>

          
          {/* "Dancing" Swivel Image */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={champion} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
        
        {/* CLOSING LINE */}
        <Row>
          <Col md={12} className="home-about-social">
            
            <h1><i><span className="blue">Connect</span> With <span className="blue">Me!</span></i></h1>

            {/* sub-header */}
            <p>
              Imagine <span className="blue">our adventures</span>, together!
            </p>


            {/* Social Icons And Online Platforms. */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/supercodingninja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/discoverfrederickthomas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="mailto:SuperCodingNinja@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="mail"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://www.youtube.com/playlist?list=PLnxMwdxjTgTEN-xRODXLJ6sI5hgz1lFbu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="youtube"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://dev.to/supercodingninja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="dev"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://fb.com/supercodingninja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fb"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://codepen.io/supercodingninja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="codepen"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default homeContent;
