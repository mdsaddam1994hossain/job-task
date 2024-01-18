import React from 'react';
import { useGetUsersQuery } from '../../redux/reducer/apiSlice';

const Users = () => {
    const {data} = useGetUsersQuery()

    const { data: users, isLoading: isUsersLoading } = useGetUsersQuery();
    console.log(users,"all user....")
    return (
        <div>
            <p>Users pages</p>
        </div>
    );
};

export default Users;