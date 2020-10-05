import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './Banner.css';
import Data from '../../fakeData/destination.json';
import DestinationPicture from '../DestinationPicture/DestinationPicture';
import { Link } from 'react-router-dom';
const Banner = () => {
    const [destinationData, setDestinationData] = useState([]);
    useEffect(() => {
        setDestinationData(Data);
    }, [])
    return (
        <Container fluid>
            <div className="row banner-area">
                <div className="col-md-4 offset-md-1">
                    <h1>{destinationData[0] && destinationData[0].title}</h1>
                    <p>{destinationData[0] && destinationData[0].shortDescription}...</p>
                    <Link to={`/booking/${destinationData[0] && destinationData[0].id}`}><button className="btn booking-btn">Booking <FontAwesomeIcon icon={faLongArrowAltRight} /></button></Link>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        {
                            destinationData.map(destination => 
                            <DestinationPicture key={destination.id} data={destination}></DestinationPicture>)
                        }
                        
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;