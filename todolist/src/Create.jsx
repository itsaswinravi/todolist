import React,{ useState } from 'react'
import axios from 'axios'

function Create() {
  const [task,setTask] = useState()
    const handleAdd =() => {
        axios.post('https://todolist-ngli.onrender.com/add',{task: task})
        .then(result => {
          location.reload()
        }
          )
        .catch(err => console.log(err))
    }
  return (
    <div className='Create_form'> 
        <input type="text" name="" id="" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create