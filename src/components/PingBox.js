import React, { useState } from 'react'
import PingBoxFooter from './PingBoxFooter'
import './PingBox.css'
const PingBox = () => {
    const [email,setEmail] = useState("")
    const ValidateEmail = () => 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    document.getElementById('validatortext').style.visibility = "visible";
    document.getElementById('validemail').style.borderColor = "hsl(354, 100%, 66%)";
    document.getElementById('notifyinput').style.marginBottom = "20px";
    return (false)
}
  return (
    <main className='container'>
        <div className='flexbox mainbox'>
            <div className='item pinglogo'><img className='logo' src="/images/logo.svg" alt='ping logo'/></div>
            <div className='item fullcontent'>
                <p>We are launching <span>soon!</span></p>
                <p className='subscribe'>Subscribe and get notified</p>
            </div>
            <form>
            <div className='flexbox notifybox'>
                <div className='item notifyinput' id='notifyinput'>
                <input type="email" id='validemail' onChange={(event) => {setEmail(event.target.value)}} placeholder='Your Email Address' required/>
                <p className='validatortext' id='validatortext'>Please provide a valid email address</p>
                </div>
                <div className='item notifybutton'>
                <button onClick={ValidateEmail}>Notify Me</button>
                </div>
            </div>
            </form>
            <div className='item fullcontent'>
                <img src="/images/illustration-dashboard.png" alt="illustration-dashboard" />
            </div>  
        </div>
        <PingBoxFooter/>
    </main>
  )
}

export default PingBox