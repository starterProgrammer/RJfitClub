import { useRef, useState } from 'react'
import './Subscribe.css'
import emailjs from '@emailjs/browser'


export const Subscribe = () => {
    const formRef = useRef()

    // Email js 
    const YOUR_SERVICE_ID = "service_91n2ild"
    const YOUR_TEMPLATE_ID = 'template_fymdng8'
    const YOUR_PUBLIC_KEY = 'mCRYB_xB-0BgtnSm1' 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text); 
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="Subscribe">
            <div className="left-s">
                <hr />
                <div>
                    <span className='strok-text'>Ready to</span>
                    <span>Level up</span>
                </div>

                <div>
                    <span>your body</span>
                    <span className='strok-text'>with us?</span>
                </div>
            </div>
            <div className="right-s">
                <form ref={formRef} onSubmit={sendEmail} className='email-container'>
                    <input type="email" name="user_email" placeholder='Enter your Email Address here...' />
                    <button type='submit' className='btn btn-s'>join now</button>
                </form>
            </div>
        </div>
    )
}