import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        { 
            id: 'u1', 
            name: 'Dummy 1', 
            image: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png', 
            recipes: 3 
        }
    ];

    return <UsersList items={USERS} />;
}

export default Users;