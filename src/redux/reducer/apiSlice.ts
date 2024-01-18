import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserData } from '../../types/Users';



export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  reducerPath:"apiSlice.reducer",
  endpoints: (builder) => ({
    login: builder.mutation<UserData, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'login',
        method: 'POST',
        body: { email, password },
      }),
    }),
    register: builder.mutation<UserData, { email: string;password: string }>({
     
      query: ({ email, password }) => 
      
        {
          console.log(email,password,"api")
          return {
              url: `register`,
              method: 'POST',
              body: { email, password },
            }
          
        }
    }),
    getUsers: builder.query<UserData[], void>({
      query: () => 'users',
    }),
    deleteUser: builder.mutation<void, number>({
      query: (userId) => ({
        url: `users/${userId}`,
        method: 'DELETE',
      }),
    }),
    updateUser: builder.mutation<UserData, { id: number; data: UserData }>({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUsersQuery, useDeleteUserMutation, useUpdateUserMutation } = apiSlice;
