import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const OtpInput = ({length = 4, onOtpSubmit=()=>{}}) => {
    const [otp,setOtp] = useState(new Array(length).fill(''))
    const inputRefs = useRef([]);

    const handleChange = (event,index)=>{
        const value = event.target.value;
        if(isNaN(value)) return;

        const newOtp = [...otp];
        //allow only one input
        newOtp[index] = value.substring(value.length-1);
        setOtp(newOtp)


    }

    const handleClick = (index)=>{

    }

    const handleKeyDown = (e, index)=>{

    }
    console.log(inputRefs)

    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[ ])
  return (
    <div>
        {
            otp.map((value,index)=>{
                return <input
                 type='text'
                 key={index}
                 ref={(input)=>(inputRefs.current[index]=input)}
                 value={value}
                 onClick={()=>handleClick(index)}
                 onChange={(e)=>handleChange(e,index)}
                 onKeyDown={(e)=>handleKeyDown(e,index)}
                
                />
            })
        }

      
    </div>
  )
}

export default OtpInput
