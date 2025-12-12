# Guide d'intégration - Service OMDb

## Architecture

### Structure du service

```
src/app/services/
├── omdb.service.ts        # Service principal OMDb
├── omdb.service.spec.ts   # Tests unitaires
├── data.service.ts        # Service de données existant
└── data.service.spec.ts
```

### Interfaces TypeScript

Le service exporte 3 interfaces principales :

#### 1. `OmdbSearchResult`
Résultat d'une recherche
```typescript
interface OmdbSearchResult {
  Title: string;           // Titre du film/série
  Year: string;           // Année de sortie
  imdbID: string;         // ID unique IMDb
  Type: string;           // 'movie' ou 'series'
  Poster: string;         // URL de l'affiche
}
```

#### 2. `OmdbSearchResponse`
Réponse de l'API pour une recherche
```typescript
interface OmdbSearchResponse {
  Search: OmdbSearchResult[];    // Tableau des résultats
  totalResults: string;          // Nombre total de résultats
  Response: string;              // 'True' ou 'False'
  Error?: string;               // Message d'erreur si applicable
}
```

#### 3. `OmdbMovieDetail`
Détails complets d'un film/série
```typescript
interface OmdbMovieDetail {
  Title: string;           // Titre
  Year: string;           // Année
  Rated: string;          // Classification (PG, R, etc.)
  Released: string;       // Date de sortie
  Runtime: string;        // Durée
  Genre: string;          // Genres
  Director: string;       // Réalisateur(s)
  Writer: string;         // Scénariste(s)
  Actors: string;         // Acteur(s)
  Plot: string;           // Synopsys
  Language: string;       // Langue(s)
  Country: string;        // Pays
  Awards: string;         // Récompenses
  Poster: string;         // URL affiche
  Ratings: Array<{ Source: string; Value: string }>; // Notes de différents sites
  Metascore: string;      // Score Metascore
  imdbRating: string;     // Note IMDb
  imdbVotes: string;      // Nombre de votes
  imdbID: string;         // ID IMDb
  Type: string;           // 'movie' ou 'series'
  DVD: string;            // Date sortie DVD
  BoxOffice: string;      // Recettes au box-office
  Production: string;     // Producteur
  Website: string;        // Site officiel
  Response: string;       // 'True' ou 'False'
  Error?: string;         // Erreur si applicable
}
```

## Utilisation du service dans d'autres composants

### Exemple : Ajouter la recherche dans un autre composant

```typescript
import { Component, inject } from '@angular/core';
import { OmdbService, OmdbSearchResult, OmdbMovieDetail } from '../services/omdb.service';

@Component({
  selector: 'app-my-component',
  templateUrl: 'my-component.html',
  styleUrls: ['my-component.scss'],
})
export class MyComponent {
  private omdbService = inject(OmdbService);
  
  results: OmdbSearchResult[] = [];
  selectedMovie: OmdbMovieDetail | null = null;

  // Rechercher des films
  searchMovies(query: string) {
    this.omdbService.search(query, 'movie').subscribe({
      next: (response) => {
        if (response.Response === 'True') {
          this.results = response.Search;
        }
      },
      error: (err) => console.error('Erreur de recherche', err)
    });
  }

  // Obtenir les détails d'un film
  getMovieDetails(imdbID: string) {
    this.omdbService.getDetails(imdbID).subscribe({
      next: (details) => {
        this.selectedMovie = details;
      },
      error: (err) => console.error('Erreur détails', err)
    });
  }
}
```

## Méthodes disponibles

### `search(query: string, type?: string): Observable<OmdbSearchResponse>`

Recherche des films ou séries.

**Paramètres:**
- `query` (string) : Terme de recherche
- `type` (string, optionnel) : 'movie' ou 'series'

**Exemple:**
```typescript
// Rechercher tous les titres contenant "matrix"
this.omdbService.search('matrix').subscribe(...);

// Rechercher uniquement des films
this.omdbService.search('matrix', 'movie').subscribe(...);

// Rechercher uniquement des séries
this.omdbService.search('game of thrones', 'series').subscribe(...);
```

### `getDetails(imdbID: string): Observable<OmdbMovieDetail>`

Obtient les détails complets d'un titre.

**Paramètres:**
- `imdbID` (string) : ID IMDb du titre (ex: 'tt0133093')

**Exemple:**
```typescript
this.omdbService.getDetails('tt0133093').subscribe(details => {
  console.log(`${details.Title} (${details.Year})`);
  console.log(`Note: ${details.imdbRating}/10`);
  console.log(`Synopsys: ${details.Plot}`);
});
```

## Points clés d'implémentation

### 1. Injection du service
```typescript
private omdbService = inject(OmdbService);
```

### 2. Gestion des erreurs
```typescript
this.omdbService.search(query).subscribe({
  next: (response) => {
    // Traiter la réponse
    if (response.Response === 'True') {
      // Succès
    }
  },
  error: (error) => {
    // Gérer l'erreur réseau
    console.error('Erreur API:', error);
  }
});
```

### 3. Champs optionnels
Toujours vérifier si les données sont disponibles :
```typescript
if (detail.Poster && detail.Poster !== 'N/A') {
  // Afficher l'affiche
}

// Ou utiliser *ngIf dans le template
// <img *ngIf="detail.Poster && detail.Poster !== 'N/A'" [src]="detail.Poster" />
```

## Configuration API

### Clé API
```
eb1e3ea9
```

### Endpoint
```
https://www.omdbapi.com/
```

### Limitations
- 1000 requêtes par jour (plan gratuit)
- Délai entre les requêtes: < 100ms
- Pas de limitation de résultats par recherche (pagés à 10)

## Tests

Des tests unitaires sont inclus dans `omdb.service.spec.ts`:

```bash
# Exécuter les tests
ng test
```

Tests couvrant:
- Création du service
- Recherche avec réponse valide
- Récupération des détails d'un film
- Gestion des erreurs API

## Dépannage

### Erreur "Cannot read property 'Search' of undefined"
**Cause:** La réponse API a échoué (Response === 'False')  
**Solution:** Toujours vérifier `response.Response === 'True'`

### Images d'affiche manquantes
**Cause:** Certains titres n'ont pas d'affiche dans OMDb  
**Solution:** Vérifier `poster !== 'N/A'` avant d'afficher

### Pas de résultats
**Cause:** Titre mal orthographié ou inexistant  
**Solution:** Utiliser des titres populaires pour tester

## Limitations connues

- L'API gratuite ne retourne que 10 résultats max par recherche
- Certains titres très anciens ou obscurs peuvent ne pas avoir toutes les informations
- Les images peuvent être indisponibles pour certains titres
- Connexion Internet obligatoire

## Améliorations futures

- [ ] Implémenter la pagination (pour aller au-delà des 10 résultats)
- [ ] Cache local des requêtes
- [ ] Mode hors ligne
- [ ] Intégration avec la base de données locale de l'app
- [ ] Fil d'attente pour les requêtes en cas de déconnexion
