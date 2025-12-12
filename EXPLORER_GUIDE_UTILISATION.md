# Guide d'utilisation - Onglet Explorer

## Vue d'ensemble

L'onglet "Explorer" de l'application myShows permet de rechercher des films et des séries en utilisant la base de données OMDb (Open Movie Database).

## Fonctionnalités principales

### 1. Recherche de films et séries

- **Barre de recherche interactive** : Tapez le titre d'un film ou d'une série
- **Recherche automatique** : Les résultats s'affichent automatiquement avec un délai de 500ms (débounce)
- **Bouton de réinitialisation** : Un bouton X apparaît quand vous commencez à taper pour réinitialiser facilement la recherche

### 2. Affichage des résultats

La liste des résultats affiche pour chaque titre :
- **Affiche du film/série** : Image du poster (si disponible)
- **Titre** : Le nom complet du titre
- **Année et type** : Année de sortie et type (Film ou Série)
- **Indication sélectionnable** : Une flèche indique que l'élément est cliquable

### 3. Détails complets

En cliquant sur un résultat, vous accédez à une vue détaillée affichant :

#### Informations visuelles
- **Affiche haute résolution** : Image du poster en grand format

#### Informations principales
- **Titre complet** : Le titre exact du film ou de la série
- **Métadonnées** : Année, type (Film/Série), classification (PG, R, etc.)
- **Note IMDb** : Note sur 10 avec nombre de votes (si disponible)

#### Informations détaillées
- **Genre** : Catégories du film/série (Action, Sci-Fi, Drama, etc.)
- **Réalisateur** : Nom(s) du/des réalisateur(s)
- **Acteurs** : Principal(aux) acteur(s)
- **Synopsys** : Description complète du film/série

#### Navigation
- **Bouton de fermeture** : En haut à droite pour revenir à la liste des résultats
- **Scroll fluide** : Navigation aisée dans les informations sur mobile et desktop

## États et feedback

### États visuels

| État | Affichage |
|------|-----------|
| **Au repos** | Icône de recherche et message d'invitation |
| **Recherche en cours** | Spinner de chargement |
| **Résultats trouvés** | Liste des résultats avec count |
| **Aucun résultat** | Message "Aucun résultat trouvé" |
| **Erreur API** | Message d'erreur en rouge |

### Gestion des erreurs

- Affichage clair des messages d'erreur en cas de problème API
- Possibilité de réessayer en effectuant une nouvelle recherche

## Responsive Design

L'interface s'adapte à tous les appareils :

### Mobile (< 576px)
- Affiche optimisée pour petit écran
- Barre de recherche pleine largeur
- Détails empilés verticalement
- Images optimisées pour économiser la bande passante

### Tablette (576px - 992px)
- Disposition 2 colonnes pour les métadonnées
- Affiche plus grande
- Meilleure utilisation de l'espace

### Desktop (> 992px)
- Disposition en grille 2 colonnes
- Affiche à gauche, détails à droite
- Meilleure lisibilité
- Formatage optimisé pour écrans larges

## Astuces d'utilisation

1. **Recherche efficace** : Tapez au moins 1-2 caractères pour de meilleurs résultats
2. **Films vs Séries** : La recherche trouve les deux types ; vérifiez le type dans les résultats
3. **Affiches manquantes** : Si un titre n'a pas d'affiche, un placeholder s'affiche
4. **Informations incomplètes** : Les champs non disponibles affichent "Non disponible"
5. **Naviguer rapidement** : Utilisez le bouton X pour réinitialiser et chercher un autre titre

## Données affichées

L'application affiche les données suivantes de l'API OMDb :

```
- Titre (Title)
- Année de sortie (Year)
- Type (movie ou series)
- Affiche (Poster)
- Classification (Rated)
- Genre
- Réalisateur (Director)
- Acteurs (Actors)
- Synopsys (Plot)
- Note IMDb (imdbRating)
- Runtime (pour les films)
- Pays
```

## Limitations

- L'API OMDb a une limite de requêtes gratuites (1000/jour)
- Certains titres anciens ou obscurs peuvent ne pas avoir d'informations complètes
- Les affiches proviennent directement d'OMDb et peuvent parfois être manquantes
- La recherche nécessite une connexion Internet

## Améliorations futures possibles

- [ ] Pagination pour les résultats (10 par page)
- [ ] Filtre par type (films uniquement, séries uniquement)
- [ ] Filtre par année ou genre
- [ ] Sauvegarde des favoris localement
- [ ] Historique des recherches
- [ ] Intégration avec votre liste personnelle de séries
- [ ] Cache local des recherches récentes
- [ ] Mode hors ligne avec données en cache
