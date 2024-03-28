// Importe les fonctions nécessaires depuis la bibliothèque redux-toolkit/query/react
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const urltestVercel = "https://todo-app-kappa-two-24.vercel.app";
const url = 'http://localhost:8050';
// Crée une nouvelle API en utilisant la fonction createApi de Redux Toolkit
export const figureApi = createApi({
    // Spécifie le chemin du réducteur dans le store Redux
    reducerPath: 'figureApi',
    // Définit la requête de base qui sera utilisée pour toutes les requêtes de cette API
    baseQuery: fetchBaseQuery({ baseUrl: `${url}/api/figure`}),
    // Définit les types de tags qui peuvent être utilisés pour invalider et refetcher les requêtes
    // Chaque tag est un objet avec un type et un identifiant. 
    // Le type est généralement le nom du modèle de données (par exemple, 'Figure' dans votre cas), et l'identifiant est généralement l'ID de l'entité spécifique.
    tagTypes: ['Figure'],
    // Définit les points de terminaison de l'API
    endpoints: (builder) => ({
        // Définit une requête pour obtenir des figures
        getFigures: builder.query({
            // Spécifie le chemin de l'API pour obtenir des figures
            query: () => '/',
            // Cette option est utilisée dans les requêtes pour spécifier les tags qui sont fournis par la requête. 
            // Cela signifie que la requête met en cache les données associées à ces tags. 
            // Par exemple, la requête getFigures fournit le tag 'Figure', ce qui signifie qu'elle met en cache les données de toutes les figures.
            providesTags: ['Figure'],
        }),
        // Définit une mutation pour ajouter une figure
        addFigure: builder.mutation({
            // Spécifie le chemin de l'API, la méthode et le corps de la requête pour ajouter une figure
            query: (body) => ({
                url: `/`,
                method: 'POST',
                body,
            }),
            // Cette option est utilisée dans les mutations pour spécifier les tags qui sont invalidés par la mutation. 
            // Cela signifie que la mutation rend obsolètes les données associées à ces tags. 
            // Par exemple, la mutation addFigure invalide le tag 'Figure', 
            // ce qui signifie qu'après l'ajout d'une figure, toutes les données de figure mises en cache sont considérées comme obsolètes et seront refetchées la prochaine fois qu'elles seront nécessaires.
            invalidatesTags: ['Figure'],
        }),
        // Définit une mutation pour mettre à jour une figure
        updateFigure: builder.mutation({
            // Spécifie le chemin de l'API, la méthode et le corps de la requête pour mettre à jour une figure
            query: ({ id, ...patch }) => ({ 
                url: `/${id}`, 
                method: 'PUT', 
                body: patch 
              }),
            // Spécifie les tags qui seront invalidés après la réalisation de cette mutation
            invalidatesTags: ['Figure'],
        }),
        // Définit une mutation pour supprimer une figure
        deleteFigure: builder.mutation({
            // Spécifie le chemin de l'API et la méthode de la requête pour supprimer une figure
            query: (id) => ({ 
                url: `/${id}`, 
                method: 'DELETE' 
              }),
            // Spécifie les tags qui seront invalidés après la réalisation de cette mutation
            invalidatesTags: ['Figure'],
        }),
    }),
});

// Exporte les hooks générés par Redux Toolkit pour chaque point de terminaison
export const {
    useGetFiguresQuery,
    useAddFigureMutation,
    useUpdateFigureMutation,
    useDeleteFigureMutation,
} = figureApi;