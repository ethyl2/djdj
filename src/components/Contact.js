import React from 'react';
import Sign from '../images/mrAndMrs.jpg';
import DaveLiz from '../images/daveAndLizWedding.jpg';

const Contact = (props) => {
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
                    <h3>Dave Nuffer </h3>
                    <address><a href="tel:+18017930510">801-793-0510</a>
                    </address>
                    <address>
                    <a href="mailto:djnuffer@gmail.com">djnuffer@gmail.com</a><br />
                    </address>
                    
                    <h3>Liz Nuffer </h3>
                    <address><a href="tel:+18019467138">801-946-7138</a>
                    </address>
                    
                    <a href="http://www.facebook.com/pages/DJDJ-Entertainment/120220211345822">Visit us on Facebook</a>
            </div>
        </div> 
    )
}
export default Contact;