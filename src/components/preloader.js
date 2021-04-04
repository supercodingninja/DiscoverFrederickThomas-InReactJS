'use strict';

import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Followoing format of awesome tutorial and approach of Network Connection Ref. https://github.com/soumyajit4419/Portfolio  There will be a great deal of difference.  Strictly as reference.  //
function Preloader(props) {
  
  return <div id={props.load ? 'preloader' : 'preloader-none'}></div>;

}

export default Preloader;