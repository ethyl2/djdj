import React from 'react';
import coupleDancing from '../images/coupleDancing.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,
    faMusic,
    faSchool,
    faBirthdayCake 
    } from '@fortawesome/free-solid-svg-icons';

const Pricing = (props) => {
    return (
        <div>
            <h1>Pricing</h1>
            <h3>All event prices below include music and equipment, lighting, microphones, DJ & MC services, and much more.
            </h3>

            <div className="img-container" >
                <img src={coupleDancing} alt="Bride and Groom Dancing" />
            </div>

            <div className="event-types" >
                <container className="event-type">
                <FontAwesomeIcon icon={faHeart} />
                    <h2>Wedding*</h2>

                        <p>$495.00 - up to 5 hours</p>
                        <p>Includes everything:<br /> ceremony, reception, background music, dancing, announcements, and unlimited fun.
                        </p>
                </container>

                <container className="event-type">
                    <FontAwesomeIcon icon={faMusic} />
                    <h2>Company Event*</h2>

                        <p>$395.00 - up to 5 hours</p>
                        <p>Includes everything:<br /> dinner music, dancing, games, announcements, and much more.
                        </p>
                </container>

                <container className="event-type">

                    <FontAwesomeIcon icon={faSchool} />
                    <h2>School Dance*</h2>
                    <p>$295.00 - up to 5 hours</p>
                    <p>Includes everything:<br /> dancing, games, contests, awards, announcements, and an unforgettable evening.
                    </p>
                </container>

                <container className="event-type">
                    <FontAwesomeIcon icon={faBirthdayCake} />
                    <h2> Other Events</h2>
                        <p>Other events not listed (bar/bat mitzvahs, community events, 
                            church dances, reunions, anniversaries, shows, conventions, 
                            festivals, races, and many others) please contact DJ.DJ 
                            Entertainment for pricing.
                        </p>
                </container>
            </div>
            <hr />
            <p className="note">
            *All prices listed are standard estimates only. 
            Prices may be more or less in some circumstances: 
            travel over 150 miles, day of the week, & hours of work.
            For an exact quote on your event, please call or e-mail.</p>
            <p className="note" >  
            For all events, a $100 deposit is required to secure services 
            for your date requested; this will be subtracted from your total.
            </p>
        </div>
    );
}
export default Pricing;