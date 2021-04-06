import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';

function fbCards(props) {
  
  return (
    <a
      className='fb-link'
      href={props.link}
      target='_blank'
      rel='noreferrer'
      style={{ fontSize: '1em' }}
    >
      <Card className='fb-card-view'>
        <Card.Img variant='top' src={props.imgPath} className='fb-img' />
        <Card.Footer>
          <i className='fas fa-external-link-square-alt'>&nbsp;</i>
          {props.title}

          <p style={{ marginBlockEnd: '0em' }}>{props.site}</p>
        </Card.Footer>
      </Card>
    </a>
  );
}

export default fbCards;