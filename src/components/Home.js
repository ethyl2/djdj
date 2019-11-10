import React from 'react';
import Dave_Nuffer from '../images/Dave_Nuffer.jpg';

const Home = (props) => {
    return (
        <div>
            <header>
            <h1>DJ.DJ Entertainment</h1>
            <h2>WEDDINGS & EVENTS</h2>
            </header>

            <h3>Delivering fantastic DJ services<br /> to thousands of satisfied customers
            <br />for events in Utah, Nevada, Wyoming, 
                Idaho, Oregon, and Washington
            <br />since 2006.</h3>
            <img src={Dave_Nuffer} alt="Dave Nuffer" />
            <p>DJ.DJ Entertainment is owned and operated by DJ Dave Nuffer, 
                who has been in the professional DJ business since 1995.
            </p>

            <p>Dave's professional and friendly personality, and his 
                20+ years of experience as a DJ, are the perfect mix to make 
                your next event unforgettable.</p>
        </div> 
    )
}
export default Home;