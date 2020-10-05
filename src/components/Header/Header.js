import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../resources/Logo.png';
import './Header.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { UserLoginContext } from '../../App';
import { handleSignOut } from '../Loginform/LoginManager';
const Header = () => {
    const history = useHistory();
    const [userSignUp, setUserSignUp] = useContext(UserLoginContext);

    const signOut = () => {
        handleSignOut()
        .then(res => {
            setUserSignUp(res);
        })
    }
    return (
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/"><img className="logo-img" src={Logo}></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search for destination..." className="mr-sm-2" /><FontAwesomeIcon icon={faSearch} />
                    </Form>
                    <Nav className="ml-auto">
                    <Nav><Link>News</Link></Nav>
                    <Nav><Link>Destination</Link></Nav>
                    <Nav><Link>Blog</Link></Nav>
                    <Nav><Link>Contact</Link></Nav>
                {
                    !userSignUp.isLogin &&  <Nav><Link to="/login" className="hover">Login</Link></Nav>
                }
                    
                {
                    userSignUp.isLogin && <Nav><Link onClick={signOut} className="hover">Logout</Link></Nav>
                }
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
    );
};

export default Header;