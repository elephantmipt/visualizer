import React from 'react'
import { NavDropdown} from 'react-bootstrap';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'


const ProfileNav = (props) => {
    
    return (
        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                
                <NavDropdown.Item color='grey' href='/user'>{props.profile.name}</NavDropdown.Item>
                
                <NavDropdown.Item href="/setings">Setings</NavDropdown.Item>
                <NavDropdown.Divider />
                
                <NavDropdown.Item onClick={props.signOut}>Sign Out</NavDropdown.Item>
                
        </NavDropdown>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(ProfileNav)
