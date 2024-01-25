import React, { useEffect, useState } from 'react'
import { Row,Col,Card,Container } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import image from '../approval-process-management.svg'
import image1 from '../category_3502688.png'
import image2 from '../colorful-sound-wave-equalizer-3.png'
import './LandingPage.css'

function LandingPage({setHeaderColor}) {
  const navigateByUrl=useNavigate()

  const handleHomeNavigation=()=>{
    navigateByUrl('/home')
    setHeaderColor('#0093d5')

  }
useEffect(()=>{
  setHeaderColor('black')

},[])

  return (
   <div   >
   <Row style={{height:'92vh',backgroundColor:'#0093d5'}} className=' mb-5 d-flex align-items-center justify-content-between'>
    <Col></Col>
    <Col lg={4}>
      <h3 className='text-dark'>Welcome to <span className='text-warning'>Media Player</span> </h3>
      <p style={{textAlign:'justify'}}>Explore an immersive video experience with our platform designed for video enthusiasts. Discover, categorize, and save your favorite  videos seamlessly. Watch content with personalized categories and enjoy the convenience of a comprehensive watch history feature.</p>
      <div onClick={handleHomeNavigation}  className="btn btn-warning mt-3 fw-bolder" >Get Started</div>
    </Col>
    <Col lg={6}>
      <img  className="img-fluid "src="https://media3.giphy.com/media/XGbfacwWVO9J34OSBL/source.gif" alt="" />
    </Col>
   </Row>
   <div className="container d-flex justify-content-between align-items-center mt-5 mb-5 flex-column ">
    <h3>Features</h3>
    <div className="cards mt-3 d-flex justify-content-center align-items-center gap-4 p-2">
        <Card className='card p-3 bg-light  border rounded-bottom border-info bg-white text-dark ' style={{ width: '22rem' }}>
      <Card.Img  height={'200px'} width={'100px'} variant="top" src={image} />
      <Card.Body>
        <Card.Title>Features</Card.Title> 
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className=' card p-3 border bg-transparent rounded-bottom border-info ' style={{ width: '22rem' }}>
      <Card.Img  height={'200px'} width={'200px'} variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        <Card className='card p-3 border bg-white text-dark rounded-bottom border-info ' style={{ width: '22rem' }}>
      <Card.Img  height={'200px'} width={'100px'} variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Categorize videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      
    
    </div>
   
   </div>
   <div className="container mt5 mb-5 d-flex justify-content-between  w-100 border p-5 border-secondary rounded">
    <div className="content d-flex flex-column justify-content-around ">
      <h3 className="text-warning">Simple , Fast and Powerful</h3>
      <h6> <span className='fw-bolder fs-5'>Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, rem! Ut earum voluptas voluptatibus, et distinctio laboriosam assumendtio natus repellat, nesciunt nam. </h6>
      <h6> <span className='fw-bolder fs-5'>Categorize videos :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, rem! Ut earum voluptas voluptatibus, et distinctio laboriosam assumendtio natus repellat, nesciunt nam. </h6>
      <h6> <span className='fw-bolder fs-5'>Managing History :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, rem! Ut earum voluptas voluptatibus, et distinctio laboriosam assumendtio natus repellat, nesciunt nam. </h6>

    </div>
    <div className="video ms-5">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0IYvrTl9ZBc?si=Sp-7GPqDSr1Yay29" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
   </div>
   </div >
  )
}

export default LandingPage