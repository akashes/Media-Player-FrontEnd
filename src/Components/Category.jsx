import React, { useEffect } from 'react'
import { useState } from 'react';
import { Modal,Button,Form, Row, Col } from 'react-bootstrap';
import { deleteCategory, getAVideo, getAllCategory, saveCategory, updateCategory } from '../Services/allAPI';
import VideoCard from './VideoCard';
import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Category() {
    const [show, setShow] = useState(false);
    const [categoryName,setCategoryName]=useState("")
    const [allCategory,setAllCategory]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)



  const handleAddCategory=async()=>{
    if(categoryName){
      const body={
        categoryName,allVideos:[]
      }
      const response =await saveCategory(body)
      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()

        toast.success('Category Added')
        //reset state
        setCategoryName('')
        //call addCategory

        handleGetCategory()

      }else{
        toast.warning('error Try after some time')
      }
    console.log(response);

    }else{
      toast.info('please enter category name..')
    }
  }



  const handleGetCategory=async()=>{
    //make api call
    
    const {data}=await getAllCategory()
    setAllCategory(data)
  }
  const handleDelete=async(id)=>{
    const response = await deleteCategory(id)
    console.log(response);
    //get all categories
    handleGetCategory()
  }
  useEffect(()=>{
    handleGetCategory()

  },[])
  const videoDropped= async(e,categoryId)=>{
    const videoCardId=e.dataTransfer.getData('cardId')

    //get details of video to be dropped
    const {data}=await getAVideo(videoCardId)
    console.log(data);

    const selectedCategory=allCategory.find((item)=>item.id===categoryId)
    console.log(selectedCategory);

    selectedCategory.allVideos.push(data)

    await updateCategory(categoryId,selectedCategory)
    handleGetCategory()
  }
  const dragOver=(e)=>{
    e.preventDefault()

  }
  return (
    <>
    <div className="d-grid">
      <button onClick={handleShow} className="btn btn-info">Add New Category</button>
    </div>
    <h1>Categories</h1>
    {
      allCategory.length>0 ? 
      allCategory?.map((ele)=>(
       <div className='border mt-3 mb-3 p-3 rounded'
        droppable
        onDragOver={(e)=>dragOver(e)}

       onDrop={(e)=>videoDropped(e,ele?.id)}
       >
         <div className= " d-flex justify-content-between align-items-center">
          <h6>{ele?.categoryName}</h6>
          <button onClick={(e)=>handleDelete(ele.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
        </div>
        {
          ele?.allVideos && 
          <Row>
            {
              ele.allVideos.map(card=>(
                <Col sm={6}><VideoCard displayData={card} deleteIcon={true}/></Col>

              ))
            }
          </Row>
        }
       </div>
      )): <p className='fw-bolder mt-3 fs-5 text-danger' >Nothing to display</p>
    

    }
  
    
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following Details!!!</p>

         <Form className='border border-warning rounded p-3'>
          
         
         
          
         
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Enter Category Name" />
      
      </Form.Group>
         
         </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory}  className='btn btn-info' variant="primary">Add</Button>
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

export default Category