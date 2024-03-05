import React from 'react'
import { Container } from 'react-bootstrap'
import Meal from './Meal'

const Meal_Page = ({searchTerm}) => {
  return (
    <>
    <Container>
    <div>Meal_Page</div>
    <Meal searchTerm= {searchTerm} />

    
    </Container>
    </>
  )
}

export default Meal_Page