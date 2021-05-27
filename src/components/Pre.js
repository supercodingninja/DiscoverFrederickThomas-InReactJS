import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Pre(props) {
  return <div id={props.load ? 'preloader' : 'preloader-none'}><div className="lds-hourglass"><p className='spin1'>No</p><p className='spin2'>Fear</p></div><p className='text'>Loading ...</p><div className='race'></div></div>;
  
}

export default Pre;
