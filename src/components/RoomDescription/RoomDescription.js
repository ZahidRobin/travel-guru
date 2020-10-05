import React from 'react';
import './RoomDescription.css';
const RoomDescription = (props) => {
    const {roomImage, title, guests, bedrooms, bed, bath, description, rating, totalReviews, price} = props.description;
    return (
        <div style={{marginBottom : '20px'}} className="row">
            <div className="col-md-5">
                <img style={{height: '130px', width: '100%', borderRadius: '5px'}} src={roomImage}/>
            </div>
            <div className="col-md-7">
                <div className="description">
                    <h2>{title}</h2>
                    <p>{guests} guests, {bedrooms} bedrooms,{bed} beds,{bath} bath</p>
                    <p>{description}</p>
                    <p><span><img src="https://i.ibb.co/W5tzGxV/star.png" /></span>{rating} ({totalReviews}) <span className="price">${price}</span>/night</p>
                </div>
            </div>
        </div>
    );
};

export default RoomDescription;