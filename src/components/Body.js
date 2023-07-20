import React from 'react'
import {Routes,Route,Outlet} from 'react-router-dom'
import Apple from './Apple'
import Ball from './Ball'
import Cat from './Cat'
import Dog from './Dog'

const Body = () => {
  return (
    <div>
      <nav>
      <Outlet/>
      </nav>
    </div>
  )
}

export default Body