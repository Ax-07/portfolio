import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projetApi = createApi({
  reducerPath: 'projetApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}/api/projet`}),
  endpoints: (builder) => ({
    getProjet: builder.query({ 
      query: () => '/',
      // Ajout d'un tag 'Projet' pour cette requête
      providesTags: ['Projet']
    }),
    getProjetById: builder.query({ 
      query: (id) => `/${id}`,
      // Ajout d'un tag 'Projet' avec l'ID pour cette requête
      providesTags: (result, error, id) => [{ type: 'Projet', id }]
    }),
    createProjet: builder.mutation({ 
      query: (body) => ({ 
        url: '/', 
        method: 'POST', 
        body 
      }),
      // Invalidation du tag 'Projet' après cette mutation
      invalidatesTags: ['Projet']
    }),
    updateProjet: builder.mutation({ 
      query: ({ id, body }) => ({ 
        url: `/${id}`, 
        method: 'PUT', 
        body
      }),
      // Invalidation du tag 'Projet' avec l'ID après cette mutation
      invalidatesTags: (result, error, { id }) => [{ type: 'Projet', id }],
      
    }),
    deleteProjet: builder.mutation({ 
      query: (id) => ({ 
        url: `/${id}`, 
        method: 'DELETE' 
      }),
      // Invalidation du tag 'Projet' avec l'ID après cette mutation
      invalidatesTags: (result, error, id) => [{ type: 'Projet', id }]
    }),
  })
})

export const { 
  useGetProjetQuery, 
  useGetProjetByIdQuery, 
  useCreateProjetMutation, 
  useUpdateProjetMutation, 
  useDeleteProjetMutation 
} = projetApi;