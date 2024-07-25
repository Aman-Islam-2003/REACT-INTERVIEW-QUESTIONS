import React from 'react'
import { useState } from 'react'
import OtpInput from './OtpInput';

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showOtpField, setShowOtpField] = useState(false)
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        //phoneNumber validations
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)
        ) {
            alert('Invalid phoneNumber');
            return;
        }

        //call api 
        //show otp field
        setShowOtpField(true);

    }

    const onOtpSubmit = ()=>{
        console.log("login successful")
    }


    console.log(showOtpField)
    return (
        <div>
           { !showOtpField ?  (<form  onSubmit={handlePhoneSubmit}>
                <input
                    type='text'
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder='Enter phone number'
                />
                 <button type='submit'>Submit</button>
            </form>) : (<div>
                <p>Enter otp send to {phoneNumber}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
                </div>)
                }
           

        </div>
    )
}

export default PhoneOtpForm
