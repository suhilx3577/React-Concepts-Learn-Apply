import React from 'react'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div >
      <button onClick={()=>navigate('/')}>Home</button>
      <button onClick={()=>navigate('/career')}>Career</button>
      <button onClick={()=>navigate('/about')}>About</button>
      <button onClick={()=>navigate('/trending')}>Trending</button>
    </div>
  )
}

export default Header