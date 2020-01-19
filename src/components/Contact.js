import React, { useState } from 'react';
import Sign from '../images/mrAndMrs.jpg';
import DaveLiz from '../images/daveAndLizWedding.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faQuestionCircle, faUser, faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = (props) => {
    const [submission, setSubmission] = useState({name: '', phone:'', email: '', message: ''});

    const handleChange = e => {
        setSubmission({...submission, [e.target.name] : e.target.value});
    }

    return (
        <div>
            <div className="img-container">
                <img src={Sign} alt="Mr. and Mrs. Sign" />
            </div>
            <h1>Contact DJDJ Entertainment</h1>
            <div className="img-container contact-img" >
                    <img src={DaveLiz} alt="Dave and Liz Nuffer wedding" />
                </div>
            <div className="contact-box">
                    
                    <address><a href="tel:+18017930510"><FontAwesomeIcon icon={faPhone} /> 801-793-0510</a>
                    </address>
                    <address>
                    <a href="mailto:djnuffer@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> djnuffer@gmail.com</a><br />
                    </address>
                    
                    <a href="http://www.facebook.com/pages/DJDJ-Entertainment/120220211345822"><FontAwesomeIcon icon={faFacebook} /> Visit us on Facebook</a>
            </div>

            <div>

            <form action="https://formspree.io/mlejobow" method="POST">
                <legend>Send Us a Message</legend>

                <div className='input-box'>
                <label htmlFor='name'><FontAwesomeIcon icon={faUser} /></label>
                <input type='text' 
                    placeholder='your name'
                    onChange={handleChange}
                    id='name'
                    name='name'
                    required 
                />
                </div>

                <div className='input-box'>
                <label htmlFor='phone'><FontAwesomeIcon icon={faPhone} /></label>
                <input type='tel'
                    name='phone'
                    id='phone'
                    onChange={handleChange}
                    placeholder='your phone number'
                    required
                />
                </div>

                <div className='input-box'>
                <label htmlFor='email'><FontAwesomeIcon icon={faEnvelope} /></label>
                <input type='email'
                    name='email'
                    id='email'
                    placeholder='your email address'
                    required
                    onChange={handleChange}
                />
                </div>

                <div className='input-box'>
                <label htmlFor='eventType'><FontAwesomeIcon icon={faQuestionCircle} /></label>
                <input type='text'
                    name='eventType'
                    id='eventType'
                    onChange={handleChange}
                    placeholder='event type you are interested in: wedding, school dance, etc.'
                />
                </div>

                <div className='input-box'>
                <label htmlFor='message'><FontAwesomeIcon icon={faPenFancy} /></label>
                <textarea name='message'
                    id='message'
                    onChange={handleChange}
                    placeholder="anything else you'd like to add"
                />
                </div>

                <button type='submit'>Submit</button>
            </form>
            </div>

        </div> 
    )
}
export default Contact;