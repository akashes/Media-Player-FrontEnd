import React from 'react'
import { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap'
import { uploadVideo } from '../Services/allAPI';
import { deleteAVideo } from '../Services/allAPI';
import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
   const [video,setVideo]=useState({
    id:"",
    caption:'',
    url:'',
    embedLink:''
  })
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const extractUrl=(e)=>{
  const {value}=e.target
  if(value){
      console.log(value.slice(-11))
  const embedData= `https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:embedData})

  }else{
    setVideo({...video,embedLink:''})
  }


  }


const handleUpload= async ()=>{


  const{id,caption,url,embedLink}=video
  if( ! id || !caption || !url || !embedLink){

    toast.warning('please fill the form')


  }else{
    const response=await uploadVideo(video)
    console.log(response);
    if(response.status>=200 && response.status<300){

      //state lifting to make changes in view component when video is added

      
      setUploadVideoServerResponse(response.data)
      

      toast.success(`${response.data.caption} uploaded successfully`)
      //reset video state
      setVideo({
          id:"",
    caption:'',
    url:'',
    embedLink:''
      })
      // hide modal 
      handleClose()
    }else{
      toast.error('Uploading error')
    }

  }

}




  console.log(video);
  return (
 
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn'> <i className='fa-solid fa-circle-plus fs-1'></i> </button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following Details!!!</p>

         <Form className='border border-warning rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
      
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
      
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}/>
      
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={(e)=>extractUrl(e)} />
      
      </Form.Group>
         </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload}  className='btn btn-info' variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      />
    </>
  )
}

export default Add