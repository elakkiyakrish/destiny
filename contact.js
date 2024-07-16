import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-date-picker';
const Contact = () => {
    const items=[{id:1,name:'India'},{id:2,name:'Malaysia'},{id:3,name:'China'}]
    const [value, onChange] = useState((new Date()) );
    const[dropdown,setdropdown]=useState();
    const[select,setselect]=useState();

    const handchange=()=>{
        setdropdown( !dropdown)
    }
    const eventchange=(target)=>{
        setselect(target)
    }
    
    
  return (
    <div className='min-h-screen'>
        <div  className='ml-20 gap-10'>

        <h2 className='font-bold text-base p-3'>Edit Profile</h2>
        
        <div className='flex flex-col'> 
        <form action=''>
            <div className='flex '>
                <div className='flex flex-col gap-10 w-1/2'>
            <div className='flex flex-col'>
            <label >Name<span className='text-required'> *</span></label>
            <input className='w-1/2 border-b p-2' type='text' placeholder='Enter your display name'/>
            </div>
            <div className='flex flex-col' >
            <label>About Me<span className='text-required'> *</span></label>
            <textarea className= 'w-1/2 p-2 border-b border-9' row='4'cols='60'placeholder='describe your self in lessthan 200 words'/>
        </div>
        <div className='w-full flex flex-col gap-2'>
            <lable>Birthday <span className='text-required'>*</span></lable>
            <div className='w-full flex flex-col gap-2'>
     <DatePicker onChange={onChange} value={value} />
</div>
    </div>
    
        <div className='flex flex-col'>
        <label>Blood Group <span className='text-required'>*</span></label>
        <input className='w-1/2 p-2 border-b'type='text' placeholder='Enter your blood group'/>
        </div>
        <div className='flex flex-col' >
        <label>Gender <span className='text-required'> *</span></label>
        <div className='flex gap-10'>
            <div className='flex gap-4'>
        <input type='radio' id='male'value='Male'/>
        <label>Male</label></div>
        <div className='flex gap-4'>
        <input type='radio'id='female' value='Female'/>
        <label>Female</label></div>
        <div className='flex gap-4'>
        <input type='radio'id='other' value='Other'/>
        <label>Other</label></div>
        </div>
        </div>
        </div>
       <div className='flex flex-col gap-10 w-1/2'>    
        <div className='flex flex-row'>
            <div className='flex flex-col'>
        <label>Country<span className='text-required'> *</span></label>
        <div className='flex flex-row gap-3 cursor-pointer' >
           
         <input value={select} onClick={handchange} className='w-full p-2 border-b' type='text' placeholder='Select your country'/>
        {dropdown&&
        <div> 
            {items.map((name)=>(
          <div>
          
          <p onClick={()=>{eventchange(name.name)}} >{name.name}</p>
          </div>
        ))
}
</div>
}

        </div>
        </div>
        </div>
        <div className='flex flex-col'>
        <lable>profession <span className='text-required'>*</span></lable>
        <input className='w-1/2 p-2 border-b' type='text' placeholder='Enter your profession'/>
        </div>
        <div className='flex flex-col'>
        <lable>Email & Website <span className='text-required'>*</span></lable>
        <input className='w-1/2 p-2 border-b' type='text' placeholder='Enter your email&website'/>
        </div>
        <div className='flex gap-10'>
    
    </div>
    </div>
    </div>
     </form>
     
     </div>
     <div className='flex flex-row gap-20 justify-center'>
     <button className='w-24 bg-slate-200 p-2'>Cancel</button> 
    <button className='w-24 bg-cta p-2'>Submit</button>
    </div>
</div>

</div>




    
  )
}

export default Contact