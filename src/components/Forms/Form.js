import emailjs from "emailjs-com";
import React from 'react';
import {Formsub,ButtonBack, ButtonFront, Container, Divinputs, Input, Message, Box, } from './FormStyles';

import { AiOutlineSend } from 'react-icons/ai';

export default function Form() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gabe62160423', 'template_hae1xqc', e.target, 'user_6MbHGKiy4bWGvIgVfWkMM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        

        <Box>
            <Formsub onSubmit={sendEmail} >
                    <div >
                        
                    

                            <Input type="text" className="spaced" placeholder="Name" name="name"/>
                        
            
                            <Input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        
                    
                            <Input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        
                    
                            <Message className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></Message>
                    
                            <ButtonBack type="submit"  value="Send Message"></ButtonBack>
                    </div>
                </Formsub>
        </Box>
    )
}