import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

export default function Description() {
  return (

    <div className='description'>
      <Routes> 

        <Route path='/' element= {<div className='description'> 

        <h1> How it works </h1>
        <div className='paragraphes'> 
        <p>1-  Fill in the blankes  </p>        
        <p>2- Pick a template</p>
        <p>3- Downoald your resume  </p>
        
         </div> 
         </div> } /> 
         <Route path='/' element={<Description/>} />
        
        </Routes>

        </div>
  );
}
