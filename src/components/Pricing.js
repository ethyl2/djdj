import React from 'react';
import coupleDancing from '../images/coupleDancing.jpg';

const Pricing = (props) => {
    return (
        <div>
            <h1>Pricing</h1>
            <h3>All event prices below include music and equipment, lighting, microphones, DJ & MC services, and much more.
            </h3>

            <div className="img-container" >
                <img src={coupleDancing} alt="Bride and Groom Dancing" />
            </div>

            <h2>Wedding*</h2>

                <p>$495.00 - up to 5 hours</p>
                <p>Includes everything: ceremony, reception, background music, dancing, announcements, and unlimited fun.
                </p>

            <h2>Company Event*</h2>

                <p>$395.00 - up to 5 hours</p>
                <p>Includes everything: dinner music, dancing, games, announcements, and much more.
                </p>

            <h2>School Dance*</h2>

                <p>$295.00 - up to 5 hours</p>
                <p>Includes everything: dancing, games, contests, awards, announcements, and an unforgettable evening.
                </p>

            <h2> Other Events</h2>
                <p>Other events not listed (bar/bat mitzvahs, community events, church dances, reunions, anniversaries, shows, conventions, festivals, races, and many others) please contact DJ.DJ Entertainment for pricing.
                </p>
            
            <hr />
            <p>
            *All prices listed are standard estimates only, 
            prices may be more or less in some circumstances: 
            travel over 150 miles, day of the week, & hours of work. 
            For an exact quote on your event please call or e-mail. 
            For all events, a $100 deposit is required to secure services 
            for your date requested, this will be subtracted from your total.
            </p>
        </div>
    );
}
export default Pricing;