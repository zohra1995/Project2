import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav'>
<Link to="/"> 

      <h3 > RESUME builder </h3>

</Link>
<Link to=""> 
  <h3> My CV </h3>
      </Link>    
      </div>
  )
}
