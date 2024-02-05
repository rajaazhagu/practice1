import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [variable,setVariable]=useState([])
  const[name,setName]=useState('')
  const[a,seta]=useState(true)
  useEffect(()=>{
    try{
    axios.get('http://localhost:3001/side/user')
    .then(res=>{
      if(res.data){
        setVariable(res.data)
      }
    })
    }
    catch{
      console.log('err')
    }
  },[a])


  const handleSubmit=((e)=>{
    e.preventDefault()
    seta(!a)
    try{
      axios.post('http://localhost:3001/app/name',{name})
      .then((res)=>{
        if(res.data==='post'){
          alert('posted')
        }
      })
      setName('')
    }
    catch{
     console.log('hi')
    }
  })
  return (
    <div>
      <form onSubmit={((e)=>handleSubmit(e))}>
          <label>
            name
          </label>
            <input type='text' value={name} onChange={((e)=>setName(e.target.value))}/>
            <button type='submit'>submit</button>
      </form>

      {variable.map((single)=><p>{single.name}</p>)}
    </div>
  )
}

export default App