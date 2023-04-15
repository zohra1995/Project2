import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import FillIn from './FillIn';
export default function Resume() {
  const navigate = useNavigate();
  return (
    <div className='resume'>
  
    
    <Routes> 

      <Route path="/" element={ <div className='resume'>
            <h1>Create a professional resume</h1>
            <p> Fill in the blanks, choose a template, and download your resume instantly.</p> 
            <button onClick={() => navigate('/FillIn') } > GET started </button>
             </div>} />

    <Route path="/FillIn" element={<FillIn/>} />

    </Routes>
    
    </div>
  );
}
