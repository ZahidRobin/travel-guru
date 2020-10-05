import React from 'react';
import './DestinationPicture.css';
import { Link } from 'react-router-dom';
const DestinationPicture = (props) => {
    const {id,image, title} = props.data;
    return (
        <div className="col-md-4">
            <Link to={`/booking/${id}`}>
                <div className="featured-img">
                    <img src={image}/>
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    );
};

export default DestinationPicture;