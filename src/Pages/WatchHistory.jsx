import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../Services/allAPI'

function WatchHistory() {
  const [history,setHistory]=useState([])

  const getAllWatchHistory=async()=>{
    // make api call 
    const {data}  = await getHistory()
    setHistory(data)

  }
  const deleteWatchHistory=async(id)=>{
    await deleteHistory(id)
    getAllWatchHistory()

  }
  useEffect(()=>{
  getAllWatchHistory()
  },[])
  console.log(history);
  return (
    <div>
      <div className="container mt-5 mb-5  d-flex justify-content-between align-items-center">
        <h3>Watch History</h3>
        

          <Link className='d-flex justify-content-between align-items-center gap-3' to='/home' style={{textDecoration:'none', color:'white',fontSize:'20px' }}><i class="fa fa-arrow-left" aria-hidden="true" ></i>
Back To Home</Link>
        
      </div>
      <table className="table table-dark mt-5 mb-5 container">
        <thead><tr>
          <th >#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th></th>
          </tr></thead>
          <tbody>

            {
              history?.length>0 ? 
              history.map((val,index)=>{

         return(
                 <tr key={val.index}>
          <td >{index+1}</td>
          <td>{val?.caption}</td>
          <td><a href={val?.embedLink} target='_blank' >{val?.embedLink}</a> </td>
          <td>{val?.timeStamp}</td>
          <td> <button  onClick={()=>deleteWatchHistory(val?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i> </button></td>
          </tr>
                
         )
               
              }) 
              : <p>pending</p>


            }
      
          </tbody>
      </table>

    </div>
  )
}

export default WatchHistory