// Importation des modules nécessaires
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { figureApi } from '../api/figureApi';
import { projetApi } from '../api/projetApi';
import { categorieApi } from '../api/categorieApi';
import { stackApi } from '../api/stackApi';
import authSlice from './authSlice';

// Configuration du store Redux
export const store = configureStore({
    reducer: {
        [figureApi.reducerPath]: figureApi.reducer, // Reducer pour gérer les actions liées à l'API des figures
        [projetApi.reducerPath]: projetApi.reducer, // Reducer pour gérer les actions liées à l'API des projets
        [categorieApi.reducerPath]: categorieApi.reducer, // Reducer pour gérer les actions liées à l'API des catégories
        [stackApi.reducerPath]: stackApi.reducer, // Reducer pour gérer les actions liées à l'API des stacks
        auth: authSlice, // Reducer pour gérer les actions liées à l'authentification
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(figureApi.middleware, projetApi.middleware, categorieApi.middleware, stackApi.middleware), // Ajout des middlewares pour les API
});

// Configuration des listeners pour les actions asynchrones
setupListeners(store.dispatch);
