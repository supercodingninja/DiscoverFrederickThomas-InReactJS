import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

function Footer() {
  
  let date = new Date();
  
  let year = date.getFullYear();
  
  return (
  
    <Container fluid className='footer'>
      <Row>
        <Col md='3' className='footer-copywright'>
          <h3><i>DiscoverFrederickThomas-InReactJS</i></h3>
        </Col>
    
    
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} Frederick Thomas, Super Coding Ninja™</h3>
        </Col>
    
    
        <Col md='5' className='footer-body'>
          {/* Social Icons And Online Platforms.  Ref.: https://mdbootstrap.com/docs/standard/extended/social-media/ */}
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


              {/* https://fontawesome.com/icons/envelope?style=regular */}
              <li className="social-icons">
                <a
                  href="mailto:SuperCodingNinja@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="tel:+19195250548"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fas fa-phone-volume"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://www.youtube.com/playlist?list=PLnxMwdxjTgTEN-xRODXLJ6sI5hgz1lFbu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://dev.to/supercodingninja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-dev"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://fb.com/supercodingninja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              
              
              <li className="social-icons">
                <a
                  href="https://twitter.com/SCN2014Est"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://codepen.io/supercodingninja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-codepen"></i>
                </a>
              </li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;