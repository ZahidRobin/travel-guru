import React from 'react';
import { Container } from 'react-bootstrap';
import Loginform from '../Loginform/Loginform';
import Wheader from '../Wheader/Wheader';

const Login = () => {
    return (
        <Container>
            <Wheader></Wheader>
            <Loginform></Loginform>
        </Container>
    );
};

export default Login;