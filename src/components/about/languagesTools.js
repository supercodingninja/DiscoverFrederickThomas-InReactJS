'use strict';

import React from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../../app.css";

function theGuyInTheChair(prop) {
  return (
    <div>
      <Col xs={4} md={2} className="tech-icons">
        <i className={`${prop.iconName} tech-icon-images`}></i>
      </Col>
    </div>
  );
}

export default theGuyInTheChair;