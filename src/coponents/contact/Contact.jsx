import "./Contact.css"
import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";
const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_a25yjml', 
        'template_t75xtn5',
         formRef.current, 
         'c9ErwiDPi6VN9FOAJ'
         )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });

    }
    console.log(darkMode);
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title"> Lets discuss your projects</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img className="c-icon" src="/images/phone.png" alt="" />
                                010-7735-9802
                            </div>

                            <div className="c-info-item">
                                <img className="c-icon" src="/images/mail.png" alt="" />
                                ghalekiran03@gmail.com
                            </div>

                            <div className="c-info-item">
                                <img className="c-icon" src="/images/address.png" alt="" />
                                Gangwon-do, Sokcho-si, South korea

                            </div>

                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>What's your story?</b> Get in touch. Looking for Internship and Entry level Job opportunities                       
                             </p>
                             <form ref={formRef} onSubmit={handleSubmit}>
                                <input style={{backgroundColor:darkMode && "#333", color:darkMode &&"white"}} type="text" placeholder="Name" name="user_name"/>
                                <input style={{backgroundColor:darkMode && "#333", color:darkMode &&"white"}} type="text" placeholder="Subject" name="user_subject"/>
                                <input style={{backgroundColor:darkMode && "#333", color:darkMode &&"white"}} type="Email" placeholder="User Email" name="user_email"/>
                                <textarea style={{backgroundColor:darkMode && "#333", color:darkMode &&"white"}} rows="5" placeholder="Messages" name="message"/>
                                <button>submit</button>
                                {done && "thank you.. your meassage has been sent"}
                             </form>

                    </div>
            </div>
        </div>
    )
}

export default Contact