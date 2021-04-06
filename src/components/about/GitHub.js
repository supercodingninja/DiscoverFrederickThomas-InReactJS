import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';

function Github() {
  
  const coolColours = {
    background: 'transparent',
    grade0: '#dfb26a',
    grade1: '#57268f',
    grade2: '#47268f',
    grade3: '#37268f',
    grade4: '#27268f',
    text: 'whitesmoke',
  };

  return (
    
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      
      <h1 className='project-heading' style={{ paddingBottom: '20px' }}>
        Them&nbsp;<strong className='blue'>Code</strong>&nbsp;Days
      </h1>
      
      <GitHubCalendar
        username='supercodingninja'
        blockSize={38}
        blockMargin={7}
        theme={coolColours}
        fontSize={32}
      />

    </Row>

  );
}

export default Github;