import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Data from '../../fakeData/destination.json';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Booking.css';

const Booking = () => {
    const {id} = useParams();
    const { register, errors, handleSubmit } = useForm();
    const history = useHistory();
    const [bookingData, setBookingData] = useState([]);
    useEffect(() => {
        const result = Data.find(des => des.id == id)
        setBookingData(result);
    }, [])

    const onSubmit = data => {
        history.push(`/search/${id}`);
    };
    
    return (
        <Container fluid>
            <div className="container-bg">
                <Header></Header>
                <div className="row banner-area">
                    <div className="col-md-5 offset-md-1">
                        <h1>{bookingData.title}</h1>
                        <p>{bookingData.longDescription}</p>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <div className="booking-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="origin">Origin</label>
                            <input name="origin" id="origin" type="text" ref={register({ required: true })} />
                            {errors.origin && <span className="error">Origin is required</span>}
                            <label htmlFor="destination">Destination</label>
                            <input name="destination" id="destination" type="text" ref={register({ required: true })} value={bookingData.title}/>
                            {errors.destination && <span className="error">Destination name is required</span>}
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="from">From</label>
                                    <input type="date" id="from" name="from" ref={register({ required: true })} />
                                    {errors.from && <span className="error">Starting Date is required</span>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="to">To</label>
                                    <input type="date" id="to" name="to" ref={register({ required: true })} />
                                    {errors.to && <span className="error">Ending Date is required</span>}
                                </div>
                            </div>
                            <input  type="submit" value="Start Booking"/>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
// to={`/search/${id}`}
export default Booking;