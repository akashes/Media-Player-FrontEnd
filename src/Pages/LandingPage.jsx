import React from 'react'
import { Row,Col,Card,Container } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function LandingPage() {
  const navigateByUrl=useNavigate()

  const navigate=()=>{
    navigateByUrl('/home')
  }
  return (
   <>
   <Row className='mt-5 mb-5 d-flex align-items-center justify-content-between'>
    <Col></Col>
    <Col lg={4}>
      <h3>Welcome to <span className='text-warning'>Media Player</span> </h3>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempore necessitatibus expedita voluptatum rerum excepturi debitis eveniet impedit placeat cumque, nostrum maxime et ipsa vero earum quia aperiam accusamus esse?</p>
      <div onClick={navigate}  className="btn btn-info mt-3 fw-bolder" >Get Started</div>
    </Col>
    <Col lg={6}>
      <img  className="img-fluid "src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHh0YzZrZzl2YjdibTV1N3l5cHJ5OHAzMXd6OG1ibG4yemJncjNsaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MXd1tuvJJDQ5mo4XyM/giphy.gif" alt="" />
    </Col>
   </Row>
   <div className="container d-flex justify-content-between align-items-center mt-5 mb-5 flex-column">
    <h3>Features</h3>
    <div className="cards mt-3 d-flex justify-content-center align-items-center gap-4">
        <Card className='p-3   border rounded-bottom border-info ' style={{ width: '22rem' }}>
      <Card.Img  height={'200px'} width={'100px'} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body>
        <Card.Title>Features</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        <Card className='p-3 border rounded-bottom border-info ' style={{ width: '22rem' }}>
      <Card.Img  height={'200px'} width={'100px'} variant="top" src="https://media.giphy.com/media/1bG7bbKHn8Rtm5FOdO/giphy.gif" />
      <Card.Body>
        <Card.Title>Categorize videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        <Card className='p-3 border rounded-bottom border-info ' style={{ width: '22rem' }}>
      <Card.Img  height={'200px'} width={'200px'} variant="top" src="https://media.giphy.com/media/149mbArhpEpry0/giphy.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
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
   </>
  )
}

export default LandingPage