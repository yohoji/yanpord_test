# Aspirateur automatique

Ce projet contient une solution à l'exercice de l'aspirateur automatique. Il comprend les classes `Vacuum` et `Grid` qui peuvent être utilisées pour représenter l'aspirateur et la grille sur laquelle il se déplace, ainsi que des méthodes pour exécuter des commandes individuelles et une série d'instructions.

## Exigences

Pour exécuter ce projet, vous devez avoir Node.js installé sur votre ordinateur. Ensuite, vous devrez installer les dépendances en exécutant la commande suivante:

    ```
    npm install
    ```

## Exécution du projet

Pour exécuter le projet, suivez ces étapes :

1. Ouvrez une invite de commandes ou une fenêtre de terminal et accédez au répertoire où vous avez enregistré les fichiers du projet.

2. Exécutez la commande suivante pour démarrer le programme :

    ```
    npm start
    ```

3. Suivez les invites pour entrer les dimensions de la grille, la position initiale de l'aspirateur et les instructions.

4. Après avoir saisi toutes les informations requises, le programme exécutera les instructions et affichera la position finale de l'aspirateur.

## Exécution des tests

Pour exécuter les tests unitaires de ce projet, suivez ces étapes :

1. Ouvrez une invite de commandes ou une fenêtre de terminal et accédez au répertoire où vous avez enregistré les fichiers du projet.

2. Exécutez la commande suivante pour lancer les tests :

    ```
    npm run test
    ```
3. Les résultats des tests seront affichés dans votre console.

## Exemple

Voici un exemple de ce à quoi pourrait ressembler l'exécution du programme :

```bash
npm start
Dimension de la grille (x y): 10 10
Enter initial position of vacuum (x y orientation): 5 5 N
Enter instructions: DADADADAA
Output: Final position: 5 6 N
``` 




