import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    
      <Navbar style={{zIndex:1,height:'60px'}} className="bg-body-tertiary position-fixed w-100 ">
        <Container>
         <Link to={'/'} style={{textDecoration:'none'}}>
         <Navbar.Brand  className='fs-5 fw-bolder '>
         <i class="fa-solid fa-music me-2"></i>
             Media Player
          </Navbar.Brand>
         </Link>
        </Container>
      </Navbar>
    
  )
}

export default Header
