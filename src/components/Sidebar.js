import React from 'react';
import { Routes,Route ,useNavigate } from 'react-router-dom';
import Apple from './Apple'

const Sidebar = () => {
    const navigate = useNavigate();

  return (
    <div>
        <button onClick={()=> navigate('/apple')}> Apple</button>
        <button onClick={()=> navigate('/ball')}> Ball</button>
        <button onClick={()=> navigate('/cat')}> Cat</button>
        <button onClick={()=> navigate('/dog')}> Dog</button>
    </div>
  )
}

export default Sidebar