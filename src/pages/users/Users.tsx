import React, { useState } from 'react';
import { useGetUsersQuery } from '../../redux/reducer/apiSlice';
import { Button, Popover, Table } from 'antd';
import { TUser, UserData } from '../../types/Users';

import PopupButton from '../../components/PopupButton';





const Users = () => {
   // const {data} = useGetUsersQuery()

    const { data: users, isLoading: isUsersLoading } = useGetUsersQuery();
   
    const userData :UserData[] = users?.data ;

    const columns = [
      {
          title: '#ID',
          dataIndex: "id",
          key: 'id',
  
      },
      {
        title: 'USERS',
        render: (item:any)=>{
          return (
              <div className='flex gap-4 items-center'>
                  <img src={item.avatar} className='table-img' />
                  <p className='text-style-14 semi-bold'>{item.first_name}</p>
              </div>
          )
        },
        
        key: 'avatar',
      },
      {
        title: 'EMAIL',
        key: 'email',
        render:(item:TUser)=>{
          return(
             <p className='text-style-14 semi-bold'>{item.email}</p>
          )
        }
      },
      
      {
        title: 'OPTIONS',
        key: 'option',
        render:(item:TUser)=>{
          return(
             <div className='f-r' key={item.id}>
               <PopupButton user={item}/>
             </div>
          )
        }
      },
    ];
    return (
        <div>

          <p className='font-inter semi-bold text-xl'>Users List</p>
            <Table 
               dataSource={userData}
               columns={columns}
               pagination={false}
               onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    // handleRowClick(record);
                  },
                };
              }}
             />
        </div>
    );
};

export default Users;