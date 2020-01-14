import React from "react";

import {Navbar, Nav} from "react-bootstrap"; 
import { connect } from 'react-redux';
import ProfileNav from './authDepComp/profileNav';
import {SignInNav} from './authDepComp/signInNav'

const NavBar = (props) => {
  const { auth, profile } = props;
  
  const loggedIn = auth.uid ? <ProfileNav profile={profile}/> : <SignInNav/>;
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Visualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
            <Nav.Link href='/home'>Home
                <span className="sr-only">(current)
                </span>
            </Nav.Link>
            
            <Nav.Link href="/about">About
                <span className="sr-only">(current)
                </span>
            </Nav.Link>
          </Nav>
          <Nav>
            {loggedIn}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
  
}

export default connect(mapStateToProps)(NavBar);