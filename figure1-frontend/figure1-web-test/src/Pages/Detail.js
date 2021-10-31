import React from 'react';

const Detail = ({location}) => {

   return (
        <div className='feed-container'>
            <h1>Details</h1>
             <h3>{location.state.title}</h3>
            <h4>{location.state.username}</h4>            
            <img  className='img' src={location.state.image} />
            <p>{location.state.caption}</p>

        </div>
    )
}

export default Detail;