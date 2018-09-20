import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';



export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});




export const login = (username, password) => {
 return  authSuccess();

  }