import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Logo from '../../resources/Logo.png';
import './Wheader.css';
import { UserLoginContext } from '../../App';
const Wheader = () => {
    const [userSignUp, setUserSignUp] = useContext(UserLoginContext);
    return (
        <div className="wheader">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/"><img className="logo-img" src={Logo}></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav><Link>News</Link></Nav>
                        <Nav><Link>Destination</Link></Nav>
                        <Nav><Link>Blog</Link></Nav>
                        <Nav><Link>Contact</Link></Nav>
                        {
                            !userSignUp.isLogin && 
                            <Nav><Link to="/login" className="hover">Login</Link></Nav>
                        }
                        {
                            userSignUp.isLogin && <Nav><Link className="hover">{userSignUp.name}</Link></Nav>
                        }
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Wheader;