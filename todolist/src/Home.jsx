import React, {useEffect,useState} from 'react'
import Create from './Create'
import axios from 'axios'
import{BsCircleFill,BsFillCheckCircleFill,BsFillTrashFill } from "react-icons/bs";

function Home() {
  const[todos,settodos]=useState([])
  useEffect(()=>
  {
    axios.get('http://localhost:3001/get')
    .then(result => settodos(result.data))
    .catch(err => console.log(err))
  },[])
  const handleEdit =() => {

  }
  return (
    <div className='Home'>
      <h1>todo list</h1>
      <Create />
      {
        todos.length === 0 ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo => (
          <div className='task'>
            <div className='checkbox' onClick={handleEdit}>
              <BsCircleFill className='icon'/>
              
            </div>
            <p>{todo. task }</p>
            <div>
              <span><BsFillTrashFill className='icon'/></span>
            </div>
            

          </div>
          
          
         ) )
      }
    </div>
  )
}

export default Home