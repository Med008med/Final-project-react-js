import React from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'


const Nav = () => {
    const navigate=useNavigate()
  return (
    <div className='gnrl' >
      <div className='nav'>
        <h1 className='ttl'>TrioBoost</h1>
        <div className='btn'>
        <Modal/>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/Timer")}>Timer</button>
        <button onClick={()=>navigate("/To-Do-List")}>To do List</button>
        <button onClick={()=>navigate("/Quote")}>Quotes</button>     
        </div>
        </div>

    </div>

  )
}

export default Nav

