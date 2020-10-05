import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    return (
        <Container fluid>
            <div className="container-bg">
                <Header></Header>
                <Banner></Banner>
            </div>
        </Container>
    );
};

export default Home;