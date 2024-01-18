import React from 'react';
import { useGetUsersQuery } from '../../redux/reducer/apiSlice';
import { Table } from 'antd';
import { UserData } from '../../types/Users';
import optionIcon from "../../assets/optionIcon.png"

const columns = [
    {
        title: '#ID',
        dataIndex: "id",
        key: 'id',

    },
    {
      title: 'USERS',
      render: (item:any)=>{
        console.log(item)
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
      render:(item:any)=>{
        return(
           <p className='text-style-14 semi-bold'>{item.email}</p>
        )
      }
    },
    
    {
      title: 'OPTIONS',
      key: 'option',
      render:(item:any)=>{
        return(
           <div className='f-r'>
             <img src={optionIcon}  className='option-icon' />
           </div>
        )
      }
    },
  ];



const Users = () => {
   // const {data} = useGetUsersQuery()

    const { data: users, isLoading: isUsersLoading } = useGetUsersQuery();
    const userData :UserData[] = users?.data ;
    return (
        <div>
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