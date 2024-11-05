import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container'>
    <div className="d-flex justify-content-between">
      {/* intro */}
      <div style={{width:'400px'}}>
        <h5><i class="fa-solid fa-music me-3"></i>Media Player</h5>
        <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
        <p>Code licensced Luminar , docs CC </p>
        <p>currently v5.3.2.0</p>
      </div>
      {/* Links */}
      <div className="d-flex flex-column">
        <h5>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'black'}}>Landing Page</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'black'}}>Home Page</Link>
        <Link to={'/history'} style={{textDecoration:'none',color:'black'}}>History Page</Link>
      </div>
      {/* guided */}
      <div className="d-flex flex-column">
        <h5>Guides</h5>
        <a to={'/'} style={{textDecoration:'none',color:'black'}} href='https://react.dev/' target='_blank'>React</a>
        <a to={'/home'} style={{textDecoration:'none',color:'black'}} href='https://reactrouter.com/en/main' target='_blank'>React Router</a>
        <a to={'/history'} style={{textDecoration:'none',color:'black'}} href='https://react-bootstrap.github.io/'target='_blank'>React Bootstrap</a>
      </div>
      {/* contact */}
      <div className="d-flex flex-column">
      <h5>Contacts</h5>
      <div className="d-flex">
        <input type="text" placeholder='Enter Your Email here' className='form-control me-2'/>
        <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <a href="" target='_blank' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-twitter"></i></a>
        <a href="" target='_blank' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-instagram"></i></a>
        <a href="" target='_blank' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-facebook"></i></a>
        <a href="" target='_blank' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-linkedin"></i></a>
        <a href="" target='_blank' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-github"></i></a>
        <a href="" target='_blank' style={{textDecoration:'none',color:'black'}}><i class="fa-solid fa-phone"></i></a>
      </div>
      </div>
    </div>
    <p className='text-center mt-3'>Copyright &copy; July 2024 Batch,Media Player App.Built with React</p>
    </div>
  )
}

export default Footer
