import React from 'react'
import Card from 'react-bootstrap/Card';

//I do not use this component
const Meal_Card = () => {
  return (
<>
  <h3>Meals</h3>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</>
  );
    }

export default Meal_Card