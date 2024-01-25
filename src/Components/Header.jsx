import React from 'react'

import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header({headerColor}) {
  return (
      <Navbar style={{backgroundColor:headerColor?headerColor:'green'}} className=" pb-3">
        <Container className='d-flex justify-content-start gap-5'>
          <Navbar.Brand >
            <Link to ={'/'} className='fs-4' style={{textDecoration:'none', color:'white',display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
            <i className="fa-solid fa-file-video text-white me-3 fa-3x"></i>            Media Player
            </Link>

          </Navbar.Brand>

          <Link to='/home' style={{textDecoration:'none',color:'white'}} className='fs-5 fw-bold'>Home</Link>
          <Link to='/watch-history' style={{textDecoration:'none',color:'white'}} className='fs-5 fw-bold'>Watch History</Link>
        </Container>
      </Navbar>
  )
}

export default Header