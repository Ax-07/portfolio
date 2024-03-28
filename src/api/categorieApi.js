import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categorieApi = createApi({
    reducerPath: 'categorieApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}/api/categorie`}),
    endpoints: (builder) => ({
        getCategorie: builder.query({ 
        query: () => '/',
        // Ajout d'un tag 'Categorie' pour cette requête
        providesTags: ['Categorie']
        }),
        getCategorieById: builder.query({ 
        query: (id) => `/${id}`,
        // Ajout d'un tag 'Categorie' avec l'ID pour cette requête
        providesTags: (result, error, id) => [{ type: 'Categorie', id }]
        }),
        createCategorie: builder.mutation({ 
        query: (body) => ({ 
            url: '/', 
            method: 'POST', 
            body 
        }),
        // Invalidation du tag 'Categorie' après cette mutation
        invalidatesTags: ['Categorie']
        }),
        updateCategorie: builder.mutation({ 
        query: ({ id, ...patch }) => ({ 
            url: `/${id}`, 
            method: 'PUT', 
            body: patch 
        }),
        // Invalidation du tag 'Categorie' avec l'ID après cette mutation
        invalidatesTags: (result, error, { id }) => [{ type: 'Categorie', id }],
        
        }),
        deleteCategorie: builder.mutation({ 
        query: (id) => ({ 
            url: `/${id}`, 
            method: 'DELETE' 
        }),
        // Invalidation du tag 'Categorie' avec l'ID après cette mutation
        invalidatesTags: (result, error, id) => [{ type: 'Categorie', id }]
        }),
    })
    })

export const { useGetCategorieQuery, useGetCategorieByIdQuery, useCreateCategorieMutation, useUpdateCategorieMutation, useDeleteCategorieMutation } = categorieApi;