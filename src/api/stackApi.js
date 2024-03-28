import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const stackApi = createApi({
    reducerPath: 'stackApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}/api/stack`}),
    endpoints: (builder) => ({
        getStack: builder.query({ 
        query: () => '/',
        // Ajout d'un tag 'Stack' pour cette requête
        providesTags: ['Stack']
        }),
        getStackById: builder.query({ 
        query: (id) => `/${id}`,
        // Ajout d'un tag 'Stack' avec l'ID pour cette requête
        providesTags: (result, error, id) => [{ type: 'Stack', id }]
        }),
        createStack: builder.mutation({ 
        query: (body) => ({ 
            url: '/', 
            method: 'POST', 
            body 
        }),
        // Invalidation du tag 'Stack' après cette mutation
        invalidatesTags: ['Stack']
        }),
        updateStack: builder.mutation({ 
        query: ({ id, ...patch }) => ({ 
            url: `/${id}`, 
            method: 'PUT', 
            body: patch 
        }),
        // Invalidation du tag 'Stack' avec l'ID après cette mutation
        invalidatesTags: (result, error, { id }) => [{ type: 'Stack', id }],
        
        }),
        deleteStack: builder.mutation({ 
        query: (id) => ({ 
            url: `/${id}`, 
            method: 'DELETE' 
        }),
        // Invalidation du tag 'Stack' avec l'ID après cette mutation
        invalidatesTags: (result, error, id) => [{ type: 'Stack', id }]
        }),
    })
    })

export const { useGetStackQuery, useGetStackByIdQuery, useCreateStackMutation, useUpdateStackMutation, useDeleteStackMutation } = stackApi;
