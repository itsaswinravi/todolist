import React, {useEffect,useState} from 'react'
import Create from './Create'
import axios from 'axios'
function Home() {
  const[todos,settodos]=useState([])
  useEffect(()=>
  {
    axios.get('http://localhost:3001/get')
    .then(result => settodos(result.data))
    .catch(err => console.log(err))
  },[])
  return (
    <div className='Home'>
      <h2>todo list</h2>
      <Create />
      {
        todos.length === 0 ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo => (
          <div>
            {todo. task }

          </div>
          
          
         ) )
      }
    </div>
  )
}

export default Home