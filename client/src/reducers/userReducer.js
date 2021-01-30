import { v4 as uuidv4 } from 'uuid';
import { GET_USER, ADD_USER, DELETE_USER, USER_LOADING } from '../actions/types';

const initialState = {
    users: [
        { id: uuidv4(), name: 'Luis', lastname: 'Villa', username: 'luvi01', age: 20, email: 'test01@test.com', password: '1234567'},
        { id: uuidv4(), name: 'Fernanda', lastname: 'Martinez', username: 'ferma02', age: 20, email: 'test02@test.com', password: '1234568'},
        { id: uuidv4(), name: 'Michael', lastname: 'Valderrama', username: 'miva03', age: 20, email: 'test03@test.com', password: '1234569'},
        { id: uuidv4(), name: 'Joel', lastname: 'Sanchez', username: 'josa04', age: 20, email: 'test04@test.com', password: '1234560'},
        { id: uuidv4(), name: 'Mario', lastname: 'Perez', username: 'mape05', age: 20, email: 'test05@test.com', password: '1234561'}
    ],
    loading: false
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case DELETE_USER:
            console.log('Entre');
            return {
                ...state,
                users: state.users.filter( user => user.id !== action.payload)
            }

        case ADD_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        case USER_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};




//export default userReducer;

