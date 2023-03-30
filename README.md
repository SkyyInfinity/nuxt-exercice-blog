# Nuxt 2 - Blog Practice

## 1. Introduction (FR)
Créer un blog avec Nuxt 2 (TypeScript, ESLint, Prettier) avec l'API qui est fourni (Node JS).<br><br>
La base de donnée devra être structuré comme ceci :
- post (id, title, author, content, create)
- user (id, first_name, last_name, email, password, roles, create_at)

Voici la liste des fonctionnalités demandés :
- Faire un listing des articles.
- Créer un système de gestion des utilisateurs (user, admin).
- \[ADMIN\] Au clic droit sur l'un des article, afficher un menu contextuel avec des actions (Modifier, Supprimer).
- \[ADMIN\] La possibilité d'ajouter, de modifier et de supprimer des articles.
- L'utilisateur standard pourra rediger un commentaire et consulter les articles.

## 2. Installation
First you need to clone repository :
```
git clone https://github.com/SkyyInfinity/nuxt-exercice-blog.git
```
Once is done, install dependencies :
```
yarn install
```
For end, start development server :
```
yarn dev
```

## 3. Credits
[Node JS](https://nodejs.org/en) : Open-source, cross-platform JavaScript runtime environment.<br>
[Nuxt JS](https://nuxtjs.org/) : Open source framework making web development with Vue.js.<br>
[Vue.js](https://vuejs.org/) : Framework for building web user interfaces.