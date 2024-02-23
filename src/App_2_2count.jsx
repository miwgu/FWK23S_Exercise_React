import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App_2_2count=()=>{

    const [value, setValue] = useState(0);


    const plusValue =() =>{
        setValue(value+1);
        setValue(value+1);
        //setValue(prev=> prev+1);
        console.log(value)

    }
    const minusValue =() =>{
        setValue(value-1);

    }

    return(
        <>

         <div><h1>2-2.</h1></div>
         <Container>
         <Row>
         <Col><h3>{value} </h3></Col>
         <Col><button onClick={plusValue}>+</button>
         <button onClick={minusValue}>-</button></Col>
         </Row>
         </Container>

        
        </>
    )
}

export default App_2_2count