import React from 'react'
import './contact.css';
const Contact = () => {
    return (
        <div className="contact">
            <div className="contactright">
                <h1>Contact us</h1>
                <input className='textinput' type="text" placeholder='Your Name' /> <br />
                <input className='textinput' type="email" placeholder='Email' /> <br />
                <input className='textinput' type="text" placeholder='Subject' /> <br />
                <textarea name="" id="msg" cols="30" rows="5"  placeholder='Message'></textarea> <br />
                <button>Submit</button>
            </div>
            <div className="contactleft">
                <img src="design.png" alt="" />
            </div>
        </div>
    )
}

export default Contact