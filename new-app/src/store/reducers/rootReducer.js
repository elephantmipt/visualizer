import { combineReducers } from 'redux';
import authReducer from './authReducer';
import listReducer from './listReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';



export const rootReducer = combineReducers({
    'auth': authReducer,
    'list': listReducer,
    'store': firestoreReducer,
    'firebase': firebaseReducer
})