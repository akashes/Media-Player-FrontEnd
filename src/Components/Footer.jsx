import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%'}}>
        <div className='container' style={{width:'100%',  display:'flex', justifyContent:'space-between', gap:'4rem'}}>
            <div className='website' style={{flex:2}} >
                     
   <h3 className='text-warning d-flex justify-content-start align-items-center' >    <i className="fa-solid fa-video text-white me-3 fa-2x"></i> Media Player</h3>
                <p>React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

</p>
                
            </div>
            <div className='links gap-2' style={{flex:1 ,display:'flex',flexDirection:'column'}}>
                <h3 className='text-warning'>Links</h3>
                <Link  style={{textDecoration:'none',color:'white'}}  to={'/'}>Landing Page </Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'/home'}>Home </Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}>Watch History </Link>
            </div>
            <div className='guides d-flex flex-column gap-2' style={{flex:1}}>
                <h3 className='text-warning'>Guides</h3>
                <Link style={{textDecoration:'none',color:'white'}} to={'https://getbootstrap.com/'}>React</Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'https://react-bootstrap.github.io/'}>React Bootstrap</Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'https://react-bootstrap.github.io/'}>Routing</Link>
            </div>
            <div className='contact'>
                <h3 className='text-warning'>Contact us</h3>
                <div className='d-flex'>
                    <input type="text" className='form-control' placeholder='Enter your Mail' />
                    <button className='btn btn-primary ms-2'>Subscribe</button>
                </div>
                <div className='d-flex justify-content-around mt-3'>
                              <Link style={{textDecoration:'none',color:'white'}} to={'https://linkedin.com/'}><i class="fa-brands fa-linkedin"></i></Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'https://react-bootstrap.github.io/'}><i class="fa-brands fa-twitter"></i></Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'https://react-bootstrap.github.io/'}><i class="fa-brands fa-facebook"></i></Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'https://react-bootstrap.github.io/'}><i class="fa-solid fa-envelope"></i></Link>
                </div>
            </div>



        </div>
        <p style={{textAlign:'center'}}>
            Copyright @ 2023 Media Player . Built with React .

        </p>
    </div>
  )
}

export default Footer