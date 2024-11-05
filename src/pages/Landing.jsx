import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/gif-main.gif'
import feature1 from '../assets/feature1.jpg'
import feature2 from '../assets/feature2.jpg'
import feature3 from '../assets/feature3.jpg'
import { Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div style={{paddingTop : '100px'}} className='container'>
       <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome To <span className='text-danger'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'> Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={LandingImg} alt="" />
        </div>
       </div>
       {/* Feature */}
       <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img height={'220px'} variant="top" src={feature1} />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
              Users can upload, view and remove the videos.
              </Card.Text>
            </Card.Body>
          </Card>
          </div> 
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img height={'220px'} variant="top" src={feature2} />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
              Users can categorise the videos by drag and drop feature.
              </Card.Text>
            </Card.Body>
          </Card>
          </div> 
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img height={'220px'} variant="top" src={feature3} />
            <Card.Body>
              <Card.Title>Managing History</Card.Title>
              <Card.Text>
              Users can manage the watch history of all videos.
              </Card.Text>
            </Card.Body>
          </Card>
          </div> 
        </div> 
       </div>
       {/* Last */}
       <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-danger">Simple Fast And Powerful</h3>
          <p style={{textAlign:'justify'}} className="fs-5 fw-bolder"><span className='text-warning fs-4 fw-bold'>Play Everything</span> Lorem ipsum dolor sit amet  Quam sint ad, quidem magni praesentium at cum nemo ducimus illo necessitatibus dignissimos ?</p>
          <p style={{textAlign:'justify'}} className="fs-5 fw-bolder"><span className='text-warning fs-4 fw-bold'>Categorize Videos</span> Lorem ipsum dolor sit amet  Quam sint ad, quidem magni praesentium at cum nemo ducimus illo necessitatibus dignissimos ?</p>
          <p style={{textAlign:'justify'}} className="fs-5 fw-bolder"><span className='text-warning fs-4 fw-bold'>Managing History</span> Lorem ipsum dolor sit amet  Quam sint ad, quidem magni praesentium at cum nemo ducimus illo necessitatibus dignissimos ?</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe className='rounded shadow' width="100%" height="400" src="https://www.youtube.com/embed/9L_ZdETLgzQ?si=n7a0djpd4otyUjrC" title="Linkin Park |Heavy is the Crown | Live" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
       </div>
    </div>
  )
}

export default Landing
