# Utiliser une image Node.js officielle comme image de base
FROM node:lts-alpine3.21

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Exposer le port sur lequel l'application va tourner
EXPOSE 4321

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]