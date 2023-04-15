import React from 'react'

export default function FillIn() {
        
  return (

    <div className='container'>
<h1> Personel Details  </h1>
<div className='container-1'> 
<input type="text"  placeholder='first name '/>  
<input type="text"  placeholder='last name '/> 
<input type="date"  placeholder='jj/mm/aa '/>  
<input type="text"  placeholder='phone number'/>  
<input type="email"  placeholder='Email '/>  
<input type="text"  placeholder='Linked In acount  '/>
< input type="image"  className='img' placeholder='YOUR image   '/>
</div>
<h1> Skills   </h1>
<div className='container-2'> 
<input type="text"  placeholder='add at least five skills  '/>  
</div>
<h1> Summary   </h1>
<div className='container-3'> 
<input type="text"  placeholder='Describe your self in few lines   '/>  
</div>
<h1> Professional experience    </h1>
<div className='container-4'> 
<input  className='month' type="month"  placeholder=' '/> 
<div className='container4-1'> 
<input className='title' type="text"  placeholder='Job title '/>  
<input className='tasks' type="text"  placeholder='Tasks '/>  
</div> 
</div>
</div>

  )
}
