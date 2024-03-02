import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const MealDetails = () => {
  const { mealId } = useParams(); // Get the mealId from URL params
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMealDetails(data.meals[0]);
      })
      .catch((error) => {
        console.error('Error fetching meal details:', error);
      });
  }, [mealId]);

  return (
    <Container className='m-4 p-3'>
      {mealDetails ? (
    <Row className="justify-content-lg-center">
        <Col >
          <Image src={mealDetails.strMealThumb} rounded className="img-fluid" style={{ maxWidth: '3500px', maxHeight: '350px' }}  />
        </Col>
        
          <h1>{mealDetails.strMeal}</h1>
        <Col lg={10} >
          <p style={{ textAlign: 'left' }}>{mealDetails.strInstructions}</p>
          </Col>
          {mealDetails.strYoutube && (
            <div>
              <h4>Video</h4>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${mealDetails.strYoutube.slice(-11)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Row>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default MealDetails;
