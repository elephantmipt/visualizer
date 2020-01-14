import React, { Component } from 'react';
import ModelList from '../components/modellist';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class UserList extends Component {
    
    

    render(){
        const { models, auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/' />
        }
        return(
            <ModelList list={models}/>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        auth: state.firebase.auth,
        models: state.store.ordered.models
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { 'collection': 'models' }
    ])
)(UserList);