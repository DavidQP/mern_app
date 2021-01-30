import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../actions/userActions';
import propTypes from 'prop-types';
import './list.scss';

const List = (props) => {

    useEffect( () => {
        getUsers();
        console.log(props.user.users.length)
    });


    const onDeleteClick = (id) => {
        props.deleteUser(id);
    }

    const  {users} = props.user;

    return(
        <div className='list'>
            <table style={ users.length > 0 ? {} : {visibility: 'hidden'} } >
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
                {
                    users.map( user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={ onDeleteClick.bind(null, user.id) }>
                                Delete
                                </button>
                            </td>
                        </tr>
                    ) )
                }
            </table>
            
        </div>
    )

}

List.propTypes = {
    getUsers: propTypes.func.isRequired,
    user: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user
});


export default connect(mapStateToProps, { getUsers, deleteUser })(List);