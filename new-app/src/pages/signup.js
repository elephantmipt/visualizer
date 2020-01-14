import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../store/actions/authActions'

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(this.state)
    this.props.signUp(this.state)
  }
  render () {
    const { auth, authError } = this.props;
    if (auth.uid) {
      return (
        <Redirect to='/user' />
      )
    }
    return (
      <MDBContainer>
        <MDBRow className='form_center' style={{justifyContent: 'center'}}>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign up</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={this.handleChange}
              />
              <br />
              
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
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
                <MDBBtn color="indigo" type="submit" onClick={this.handleSubmit}>
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
  
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);