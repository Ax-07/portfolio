# Frontend Todo List Application

Ce projet est une application frontend pour une Todo List, construite avec React et Vite. Elle interagit avec une API backend pour créer, lire, mettre à jour et supprimer des tâches.

## Récupération du projet

Vous pouvez cloner le projet à partir de son [repository GitHub](https://github.com/Ax-07/frontend-todo-list).

## Installation

Assurez-vous d'avoir Node.js et npm installés sur votre machine.

1. Clonez le repository : `git clone https://github.com/Ax-07/frontend-todo-list.git`
2. Accédez au dossier du projet : `cd frontend-todo-list`
3. Installez les dépendances : `npm install`
4. Lancez l'application : `npm run dev`

## Technologies et bibliothèques utilisées

Ce projet a été développé en utilisant les technologies et bibliothèques suivantes :

- **React.js** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **Vite** : Outil de build moderne et rapide pour les projets frontend.

## Utilisation

Pour démarrer l'application, exécutez : `npm run dev`

Fonctionnalités
L'application permet de :

- **Créer une nouvelle tâche :** Les utilisateurs peuvent ajouter une nouvelle tâche en remplissant un formulaire. Ils peuvent entrer un titre, une description, ajouter des images et définir le statut de la tâche.

- **Voir toutes les tâches :** Les utilisateurs peuvent voir une liste de toutes les tâches existantes.

- **Mettre à jour une tâche existante :** Les utilisateurs peuvent mettre à jour le titre, la description, les images et le statut d'une tâche existante.

- **Supprimer une tâche :** Les utilisateurs peuvent supprimer une tâche existante.

- **Ajouter des images à une tâche :** Lors de la création ou de la mise à jour d'une tâche, les utilisateurs peuvent ajouter une ou plusieurs images. Ils peuvent également prévisualiser les images avant de les ajouter et supprimer des images de la liste.

- **Gérer la taille des images :** L'application vérifie la taille des images ajoutées pour s'assurer qu'elles ne dépassent pas 4 Mo. Si une image est trop grande, un message d'erreur est affiché.

## Routes de l'application

L'application fournit les routes suivantes :

- **Accueil** : `http://localhost:5000/`
- **Détails d'une tâche** : `http://localhost:5000/todo/{id}`