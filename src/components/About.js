import React from 'react';
import FamilyPic from '../images/FamilyPortrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, 
    faHandsHelping, 
    faClipboardList, 
    faDollarSign,
    faSmileBeam} from '@fortawesome/free-solid-svg-icons';

const About = (props) => {
    return (
        <div>
            <h1>About DJDJ Entertainment</h1>
            <h2>DJ.DJ Entertainment is a family-run business.<br /> 
                We are proud of our reputation with customers as 
                being a friendly, dedicated, and professional DJ business,<br />  
                delivering personal service to every client, at every event.</h2>
            <div className="img-container">
                <img src={FamilyPic} alt="Dave and Liz Nuffer and children" />
            </div> 

            <h3>What we feel really makes us unique & awesome:</h3>
            <div className="awesome-points">
                <section className="awesome-point">
                    <FontAwesomeIcon icon={faUserCheck} />
                    <h3>Dave is your DJ.</h3>
                    <p>You will never have a DJ-in-training or an unknown, surprise DJ 
                        at your wedding. 
                        Dave will always be your DJ, along with his 20+ years of experience.
                        Some DJ companies employ dozens of DJ's, some with very little 
                        experience, and many times you never know who will show up at your 
                        event.</p>
                </section>

                <section className="awesome-point">
                    <FontAwesomeIcon icon={faHandsHelping} />
                    <h3>DJ.DJ is here to help.</h3>
                    <p>We can personally help you plan all the aspects of your event. 
                        Weddings can be stressful and many new brides, grooms, 
                        and parents like a little advice about events 
                        (such as the cake cutting, ceremony, spotlight dances, 
                        or dinner music). We can help.</p> 
                </section>

                <section className="awesome-point">
                    <FontAwesomeIcon icon={faClipboardList} />
                    <h3>Let's meet.</h3>    
                    <p>Other events such as school dances, public festivals, or 
                        corporate parties can also be overwhelming to plan. 
                        We are always willing to meet with clients and help plan 
                        the perfect event.</p>
                </section>
                
                <section className="awesome-point">
                    <FontAwesomeIcon icon={faDollarSign} />
                    <h3>We value your business.</h3>
                    <p>We offer flexible, yet up-front pricing. 
                        We value integrity and service above all else, and will always 
                        work to give our clients the best value.</p>
                </section>

                <section className="awesome-point">
                <FontAwesomeIcon icon={faSmileBeam} />
                <h3>You are always in complete control.</h3>
                <p>
                    We work hard to make sure your event runs according to 
                    your plans, and we won't do anything you don't want.</p>
                </section>
            </div>
        </div>
    )
}
export default About;