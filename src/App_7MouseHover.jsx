import React, { useState } from 'react'
import './App_7MouseHover.css'
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const App_7MouseHover = () => {
    const [isShown, setIsShown] = useState(false);
  
    const mouseEnter= () =>{
      setIsShown(true)
      alert("Nu drar du med muser över")
    }

    const mouseLeave = () =>{
      setIsShown(false)
      alert("Nu lämnar du med musen")
    }

  return (
    <>
    <h1>7.</h1>
    <Container>
      <Row className="justify-content-md-center">

      <div id='square1' onMouseEnter={mouseEnter}  onMouseLeave={mouseLeave}>
      </div>


      <div id='square2' onMouseEnter={mouseEnter}  onMouseLeave={mouseLeave}>
      </div>
      </Row>

      </Container>

    </>

    )
}
export default App_7MouseHover