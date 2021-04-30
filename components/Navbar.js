import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import logo from "../Assets/logo.png";
import logo2 from "../Assets/images/pro_fam.jpeg";

function NavBar() {
  
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    
    if (window.scrollY >= 20) {
      
      updateNavbar(true);
    
    } else {
     
      updateNavbar(false);
    
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (

    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >


      {/* How It Started: "My Why" */}
      <Container>
        <Navbar.Brand
        href="https://www.youtube.com/watch?v=WXV3oAYTQp4"
        target="_blank">
          <img src={logo} className="img-fluid logo" alt="brand" />
           <h6><b><i><u>Pur👆🏿pose</u></i></b></h6>
        </Navbar.Brand>&nbsp;&nbsp;&nbsp;


        {/* My Life */}
        <Navbar.Brand
        href="https://www.youtube.com/watch?v=CK_Z686G6No"
        target="_blank">
          <img src={logo2} className="img-fluid logo" alt="brand" />
           <h6><b><i><u>👆🏿Life</u></i></b></h6>
        </Navbar.Brand>


        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>


        {/* Collective Navigation begins, here, starting with the application's Home directory/url path. */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <i className="fas fa-home">&nbsp;Home</i>
              </Nav.Link>
            </Nav.Item>
            
            
            {/* About directory/url path. */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <span className="far fa-user"/>&nbsp;About<span/>
              </Nav.Link>
            </Nav.Item>
            
            
            {/* My Projects directory/url path. */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <span className="fab fa-github"/><i>&nbsp;Projects&nbsp;</i><span className="fab fa-codepen"/>
              </Nav.Link>
            </Nav.Item>
            
            
            {/* My Resume directory/url path */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Resume"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-file-alt">&nbsp;Resume</i>
              </Nav.Link>
            </Nav.Item>

            
            {/* My Porfolio Repository directory/url path. */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/supercodingninja/DiscoverFrederickThomas-InReactJS"
                target="_blank"
                className="fork-btn-inner"
              >
                Show Me Some Love&nbsp;
                <i className="far fa-star"></i>&nbsp;&nbsp;
                <i className="fas fa-code-branch"></i>{" "}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;