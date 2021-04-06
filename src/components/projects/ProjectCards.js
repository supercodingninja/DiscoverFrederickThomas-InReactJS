import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';

function proCards(props) {
  
  return (
    
    <Card className='pro-card-view'>
      <Card.Img variant='top' src={props.imgPath} alt='card-img' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>
        
        <Button variant='primary' href={props.link} target='_blank'>
          <i className='cil-external-link'>&nbsp;</i>
          {props.isBlog ? 'View Facebook Page' : 'View Project'}
        </Button>
      </Card.Body>
    </Card>
  
  );
}
export default proCards;