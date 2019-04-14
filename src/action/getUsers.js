import {GET_USERS} from '../constants/constants'

export const getUsers = () => dispatch => {
    fetch('http://localhost:5000/users')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_USERS, payload: data}))
        .catch(() => dispatch({type: GET_USERS, payload: []}));
};