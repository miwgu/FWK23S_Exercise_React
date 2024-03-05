import React from 'react'
import Container from 'react-bootstrap/Container';


const Home = () => {
  return (
    <Container>
    <div>Home</div>

    <ul >
     <li>
     <a  href="/usestete"><span>Usestate page</span></a>   
     </li>
     <li>
     <a  href="/props"><span>Prps page</span></a>   
     </li>
     <li>
     <a  href="/useeffect"><span>UseEffect page</span></a>   
     </li>
    </ul>

    </Container>

  )
}

export default Home