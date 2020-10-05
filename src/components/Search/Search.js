import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Wheader from '../Wheader/Wheader';
import './Search.css';
import Data from '../../fakeData/destination.json';
import hotelData from '../../fakeData/hotel.json';
import RoomDescription from '../RoomDescription/RoomDescription';
import GoogleMap from '../GoogleMap/GoogleMap';

const Search = () => {
    const {id} = useParams();
    const [location, setLocation] = useState('');
    const [hotelInformation, setHotelInformation] = useState([]);
    useEffect(() => {
        const result = Data.find(des => des.id == id);
        setLocation(result);
        const hData = hotelData.filter(hdata => hdata.locationID == id);
        setHotelInformation(hData);
    },[])

    return (
        <Container>
            <Wheader></Wheader>
            <hr/>
            <div className="searchResultArea">
                <div className="row">
                    <div className="col-md-7">
                        <div className="search-left">
                            <p>252 stays Apr 13-17 3 guests</p>
                            <h3 style={{paddingBottom: '15px'}}>Stay in {location.title}</h3>
                            {
                                hotelInformation.map(hotelInfo => 
                                <RoomDescription key={hotelInfo.id} description={hotelInfo}></RoomDescription>)
                            }
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="search-right">
                            <GoogleMap id={id}></GoogleMap>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};


export default Search