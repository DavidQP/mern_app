import axios from 'axios';
import { GET_USER, ADD_USER, DELETE_USER, USER_LOADING } from './types';


export const getUsers = () => (dispatch) => {
    dispatch(setUsersLoading());
    axios
    .get('/api/users')
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data,
      })
    );
  };

// export const getUsers = () => {
//     fetch("http://localhost:5000/api/users").then( res => {
//       if(res.status != 200) {
//         console.log("ERROR");
//         return;
//       }
//       res.json().then( data => {
//         if( data != null){
//           //setArticles(data.data.children);
//           console.log(data.data.children);
//         }
//       })
//     })

// }




// export const getUsers = () => {
//     return {
//         type: GET_USER
//     };
// }


export const deleteUser = id => {
    return {
        type: DELETE_USER,
        payload: id
    };
};

export const addUser = user => {
    return {
        type: ADD_USER,
        payload: user
    };
};

export const setUsersLoading = () => {
    return {
        type: USER_LOADING,
    };
};