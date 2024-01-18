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
    register: builder.mutation<UserData, { email: string;first_name:string; password: string }>({
      query: ({ email, password,first_name }) => ({
        url: 'register',
        method: 'POST',
        body: { email, first_name, password },
      }),
    }),
    getUsers: builder.query<any, void>({
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
