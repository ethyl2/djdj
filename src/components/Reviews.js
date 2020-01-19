import React from 'react';

const Reviews = props => {
    return(
        <div className='reviews-page'>
            <h1>Reviews</h1>

            <div className='reviews-box'>

                <div className='review'>"Our guests had the best time. Several told us that this is the way all wedding receptions shoud be. Dave made all the fun happen! If you want a memorable party, book Dave."
                <br /><span className='author'>-Rosanne, mother of the bride (Kaitlynn & Jake, married December 2012)</span>
                </div>

                <div className='review'>"Dave is a great DJ! I've never had so much fun at a dance party. I highly recommend Dave. He is very professional and you won't be disappointed!"
                <br /><span className='author'>-Katie Crabb, professional videographer</span>
                </div>

                <div className='review'>"Thank you for all you did tonight!! It was an incredible evening! Thank you for being our DJ!"
                <br /><span className='author'>-Kristopher & Jessica, married August 2012</span>
                </div>

                <div className='review'>"Great music selection and always professional."
                <br /><span className='author'>-Aaron Brown, Old Meeting House Catering</span>
                </div>

                <div className='review'>"Dave, thank you for having a great energy. We look forward to partying with you."
                <br /><span className='author'>-Leigh & Dan, married July 2012</span>
                </div>
                
            </div>

        </div>
    )
}

export default Reviews;