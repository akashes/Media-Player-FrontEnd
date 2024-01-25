import React from 'react'
import { Card,Button,Modal } from 'react-bootstrap'
import { useState } from 'react';
import { addHistory, deleteAVideo } from '../Services/allAPI';
import axios from 'axios';

function VideoCard({displayData,setDeleteVideoStatus,deleteIcon}) {
  console.log(displayData);
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    //get caption and link
    const {caption,embedLink}=displayData
    //generate time stamp
    let today = new Date()
    let option = {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}
    let formatter=Intl.DateTimeFormat('en-US',option)
    let timeStamp= formatter.format(today)
    console.log(timeStamp);
    let reqBody={
      caption,embedLink,timeStamp
    }
    //making api call
   const res= await addHistory(reqBody)
   console.log(res);

  }
  const deleteVideo=async(id)=>{
    try{
      // const response = await axios.delete(`http://localhost:4000/videos/${id}`)
      try{
        const response =  await deleteAVideo(id)
        console.log(response);
              setDeleteVideoStatus(true)

      }
      catch(error){
        console.error(error);
      }
      
      // const response = await deleteAVideo(id)
      // console.log(response);

      
    }
    catch(error){
      console.error(error.response.data);
    }
          

   
  }
  const dragStarted=(e,id)=>{
    e.dataTransfer.setData("cardId",id)

  }
  return (
    <>
    {
      displayData &&
    
      <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} >
      <Card.Img onClick={handleShow} className='w-100' variant="top" style={{height:'140px',objectFit:'cover'}} src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          {
            deleteIcon ? " " :          <button onClick={()=>deleteVideo(displayData?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i> </button>

          }

        </Card.Title>
       
      </Card.Body>
    </Card>
}

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <iframe width="100%" height="400" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default VideoCard