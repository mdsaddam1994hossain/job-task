import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateUser, CreateUserResponse, UserData } from '../../types/Users';

const token =localStorage.getItem("token")
console.log(token,"token....")
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://reqres.in/api/',
    //  headers: {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   'Content-Type': 'application/json',
    // },
 }),
  
  reducerPath:"apiSlice.reducer",
  endpoints: (builder) => ({
    login: builder.mutation<UserData, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'login',
        method: 'POST',
        body: { email, password },
      }),
    }),
    register: builder.mutation<UserData, { email: string;first_name:string; password: string }>({
      query: ({ email, password,first_name }) => ({
        url: 'register',
        method: 'POST',
        body: { email, first_name, password },
      }),
    }),
    createUser: builder.mutation<CreateUser, {name:string,job:string}>({
      query: ({name,job}) => ({
        url: 'users',
        method: 'POST',
        body: {name,job},
      }),
    }),
    getUsers: builder.query<any, void>({
      query: () => ({
        url: 'users',
        method: 'GET',    
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (userId) => ({
        url: `users/${userId}`,
        method: 'DELETE',
       
      }),
    }),
    updateUser: builder.mutation<UserData, { id: number; data: CreateUser }>({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useCreateUserMutation, useRegisterMutation, useGetUsersQuery, useDeleteUserMutation, useUpdateUserMutation } = apiSlice;
