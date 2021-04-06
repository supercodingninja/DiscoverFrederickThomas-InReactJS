import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

function Footer() {
  
  let date = new Date();
  
  let year = date.getFullYear();
  
  return (
  
    <Container fluid className="footer">
      <Row>
    
        <Col md="3" className="footer-copywright">
          <h3><i>DiscoverFrederickThomas-InReactJS</i></h3>
        </Col>
    
    
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Frederick Thomas, Super Coding Ninja™</h3>
        </Col>
    
    
        <Col md="5" className="footer-body">
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
  );
};

export default Footer;