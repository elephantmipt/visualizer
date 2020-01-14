import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom'; 


class SignInForm extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render(){
    const { authError, auth } = this.props;
    if (auth.uid) {
      return (
        <Redirect to='/user' />
      )
    }
    return (
    <MDBContainer>
      <MDBRow style={{justifyContent: 'center'}}>
        <MDBCol md="6" justify_content='center'>
          <form>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={this.handleChange}
            />
            <div className='red-text center'>
              {authError ? <p> {authError}</p> : null}
            </div>
            
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit" onClick={this.handleSubmit}>Login</MDBBtn>
            </div>
            
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
    
  }
}



const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);

