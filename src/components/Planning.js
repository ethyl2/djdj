import React from 'react';
import Dancing from '../images/Dancing.jpg';
import Night from '../images/Night.jpg';
import FaceToFace from '../images/FaceToFace.jpg';

const Planning = props => {
    return (
        <div>
            <h1>Start Planning</h1>
            <h2>You can download and print the forms below to begin planning your event today.</h2>
            <p>Send me the completed form via email or mail when you are ready.</p>
            <div className='sheet-link'>
                <a href='https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxkamRqbnVmZmVyfGd4OjU5MmY1MTZiMGUyMzEzNjA'>Wedding Planning Sheet</a>
            </div>
            <div className='sheet-link'>
                <a href='https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxkamRqbnVmZmVyfGd4OjJlZmFjMjk5ZTZiMjZhYjk'>Other Events Planning Sheet</a>
            </div>
            <div className="img-container medium" >
                <img src={Dancing} alt="Dancing at Wedding" />
            </div>

            <div>
                <h2>Crowd Participation Dances and Games</h2>
                <p>Your DJ can lead your guests in dances and games to increase the involvement and fun. He will be sure to help everyone learn the dances and feel comfortable.</p>
                <ul>
                    <li>The Chicken Dance</li>
                    <li>Macarena</li>
                    <li>Snowball Dance</li>
                    <li>The Bunny Hop</li>
                    <li>Married Couples Dance</li>
                    <li>The Electric Slide</li>
                    <li>Boot Scootin' Boogie</li>
                    <li>Slow Dance Ladies' Choice</li>
                    <li>Dance Contents</li>
                    <li>The Hokey Pokey</li>
                    <li>The Alligator</li>
                    <li>Conga Line</li>
                    <li>The Twist</li>
                    <li>Last Song Tribute</li>
                    <li>Cha Cha Slide</li>
                    <li>Brown Bag Dance</li>
                    <li>YMCA</li>
                    <li>Survivor</li>
                    <li>Wedding Reception Dollar Dance</li>
                    <li>Limbo</li>
                    <li>The Hustle</li>
                    <li>The Stroll</li>
                    <li>Newspaper Dance</li>
                    <li>Kids' Games</li>
                    <li>And more!</li>

                </ul>   
            </div>

            <div className="img-container medium" >
                <img src={Night} alt="Dancing at Wedding at Night" />
            </div>

            <div>
                <h2>Music Variety</h2>
                <p>We have a large music selection available, including many songs in these genres:</p>
                <ul className='music-variety'>
                    <li>Top 40/Current Hits</li>
                    <li>Big Band/Swing</li>
                    <li>Decades</li>
                    <li>Pop</li>
                    <li>Dance/Techno</li>
                    <li>Waltzes</li>
                    <li>Polkas</li>
                    <li>Latin</li>
                    <li>Jazz</li>
                    <li>Modern Country</li>
                    <li>Country Oldies</li>
                    <li>Rap</li>
                    <li>Hip-Hop</li>
                    <li>Vocal</li>
                    <li>Spiritual</li>
                    <li>Soul/R&B</li>
                    <li>Rock & Roll</li>
                    <li>Alternative Rock</li>
                    <li>Holiday</li>
                    <li>And more!</li>
                </ul>
            </div>

            <div className="img-container medium" >
                <img src={FaceToFace} alt="Couple Dancing" />
            </div>

            <div>
                <h2>Event Possibilities</h2>
                <p>Here are some events that you may interested in having at your wedding or other main event.</p>
                <ul>
                    <li>Introductions -- of bride & groom, of wedding party, of VIPs, etc.</li>
                    <li>Food/drink options -- hors d' oeuvrs, buffet, cocktail/social hour, sit-down dinner, etc.</li>
                    <li>Spotlight dances -- bride & groom, father & bride, mother & groom, parents, wedding party, etc.</li>
                    <li>Toasts/speeches</li>
                    <li>Ceremonies -- ring exchange, etc.</li>
                    <li>Receiving line</li>
                    <li>Bouquet/garter tosses</li>
                    <li>Cake cutting</li>
                    <li>Dancing</li>
                    <li>Awards/prizes/gifts</li> 
                    <li>Send-off</li> 
                </ul>
            </div>

        </div>
    );
}

export default Planning;