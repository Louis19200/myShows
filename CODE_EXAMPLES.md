# Code Examples - Explorer myShows

## Exemple 1 : Utiliser le service OmdbService dans un autre composant

### TypeScript
```typescript
import { Component, inject, OnInit } from '@angular/core';
import { OmdbService, OmdbSearchResult, OmdbMovieDetail } from '../services/omdb.service';

@Component({
  selector: 'app-my-search',
  templateUrl: 'my-search.html',
  styleUrls: ['my-search.scss'],
})
export class MySearchComponent implements OnInit {
  private omdbService = inject(OmdbService);
  
  movies: OmdbSearchResult[] = [];
  selectedMovie: OmdbMovieDetail | null = null;
  isLoading = false;
  error: string | null = null;

  ngOnInit() {
    // Faire une recherche au démarrage
    this.searchMovies('Inception');
  }

  searchMovies(query: string) {
    this.isLoading = true;
    this.error = null;

    this.omdbService.search(query, 'movie').subscribe({
      next: (response) => {
        if (response.Response === 'True' && response.Search) {
          this.movies = response.Search;
        } else {
          this.error = 'Aucun film trouvé';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erreur API';
        this.isLoading = false;
        console.error('Erreur:', err);
      }
    });
  }

  loadMovieDetails(imdbID: string) {
    this.omdbService.getDetails(imdbID).subscribe({
      next: (details) => {
        this.selectedMovie = details;
      },
      error: (err) => {
        console.error('Erreur détails:', err);
      }
    });
  }
}
```

### HTML
```html
<ion-content>
  <ion-list>
    <ion-item *ngFor="let movie of movies; let i = index" 
              (click)="loadMovieDetails(movie.imdbID)"
              button>
      <img [src]="movie.Poster" alt="{{ movie.Title }}" slot="start" />
      <ion-label>
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Year }}</p>
      </ion-label>
    </ion-item>
  </ion-list>

  <ion-card *ngIf="selectedMovie">
    <img [src]="selectedMovie.Poster" />
    <ion-card-content>
      <h2>{{ selectedMovie.Title }}</h2>
      <p>{{ selectedMovie.Plot }}</p>
    </ion-card-content>
  </ion-card>
</ion-content>
```

## Exemple 2 : Recherche avec différents types

```typescript
// Rechercher uniquement des films
this.omdbService.search('Matrix', 'movie').subscribe(response => {
  console.log('Films trouvés:', response.Search);
});

// Rechercher uniquement des séries
this.omdbService.search('Breaking Bad', 'series').subscribe(response => {
  console.log('Séries trouvées:', response.Search);
});

// Rechercher les deux types
this.omdbService.search('Game of Thrones').subscribe(response => {
  console.log('Films et séries:', response.Search);
});
```

## Exemple 3 : Gestion des images manquantes

```typescript
// Dans le template HTML
<img *ngIf="movie.Poster && movie.Poster !== 'N/A'" 
     [src]="movie.Poster" 
     alt="{{ movie.Title }}">
<div *ngIf="!movie.Poster || movie.Poster === 'N/A'" 
     class="no-poster-placeholder">
  Pas d'affiche disponible
</div>

// Dans le SCSS
.no-poster-placeholder {
  width: 100%;
  height: 200px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
```

## Exemple 4 : Formater les données manquantes

```typescript
// Helper pour afficher "N/A" ou la valeur
formatData(value: string | undefined): string {
  return (value && value !== 'N/A') ? value : 'Non disponible';
}

// Utilisation dans le template
<p>Genre: {{ formatData(movie.Genre) }}</p>
<p>Réalisateur: {{ formatData(movie.Director) }}</p>
<p>Acteurs: {{ formatData(movie.Actors) }}</p>
```

## Exemple 5 : Implémenter un cache simple

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CachedOmdbService {
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) {}

  searchWithCache(query: string): Observable<any> {
    if (this.cache.has(query)) {
      return of(this.cache.get(query));
    }

    return this.search(query).pipe(
      tap(result => this.cache.set(query, result))
    );
  }

  search(query: string): Observable<any> {
    const url = `https://www.omdbapi.com/?apikey=eb1e3ea9&s=${query}`;
    return this.http.get<any>(url);
  }

  clearCache() {
    this.cache.clear();
  }
}
```

## Exemple 6 : Ajouter des filtres à la recherche

```typescript
export interface SearchOptions {
  query: string;
  type?: 'movie' | 'series';
  year?: string;
}

export class FilteredOmdbService {
  search(options: SearchOptions): Observable<OmdbSearchResponse> {
    let url = `https://www.omdbapi.com/?apikey=eb1e3ea9&s=${options.query}`;
    
    if (options.type) {
      url += `&type=${options.type}`;
    }
    
    if (options.year) {
      url += `&y=${options.year}`;
    }

    return this.http.get<OmdbSearchResponse>(url);
  }
}

// Utilisation
this.omdbService.search({
  query: 'Matrix',
  type: 'movie',
  year: '1999'
}).subscribe(response => {
  console.log('Résultats filtrés:', response);
});
```

## Exemple 7 : Ajouter des favoris localement

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'omdb_favorites';
  
  favorites: OmdbMovieDetail[] = [];

  constructor() {
    this.loadFavorites();
  }

  addFavorite(movie: OmdbMovieDetail) {
    if (!this.isFavorite(movie.imdbID)) {
      this.favorites.push(movie);
      this.saveFavorites();
    }
  }

  removeFavorite(imdbID: string) {
    this.favorites = this.favorites.filter(m => m.imdbID !== imdbID);
    this.saveFavorites();
  }

  isFavorite(imdbID: string): boolean {
    return this.favorites.some(m => m.imdbID === imdbID);
  }

  private saveFavorites() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.favorites));
  }

  private loadFavorites() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    this.favorites = data ? JSON.parse(data) : [];
  }
}

// Utilisation
@Component({...})
export class MyComponent {
  private favService = inject(FavoritesService);

  toggleFavorite(movie: OmdbMovieDetail) {
    if (this.favService.isFavorite(movie.imdbID)) {
      this.favService.removeFavorite(movie.imdbID);
    } else {
      this.favService.addFavorite(movie);
    }
  }
}
```

## Exemple 8 : Transformer les données reçues

```typescript
import { map } from 'rxjs/operators';

// Transformer la réponse de l'API
this.omdbService.search('Matrix').pipe(
  map(response => {
    if (response.Response === 'True' && response.Search) {
      return response.Search.map(movie => ({
        ...movie,
        posterUrl: movie.Poster !== 'N/A' ? movie.Poster : 'assets/no-image.png',
        displayType: movie.Type === 'movie' ? '🎬 Film' : '📺 Série'
      }));
    }
    return [];
  })
).subscribe(movies => {
  console.log('Films transformés:', movies);
});
```

## Exemple 9 : Débounce personnalisé

```typescript
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({...})
export class SearchComponent {
  private omdbService = inject(OmdbService);
  private searchSubject = new Subject<string>();
  results: OmdbSearchResult[] = [];
  isLoading = false;

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(500),           // Attendre 500ms
      distinctUntilChanged(),       // Ignorer les doublons
      switchMap(query => {
        this.isLoading = true;
        return this.omdbService.search(query);
      })
    ).subscribe(response => {
      if (response.Response === 'True') {
        this.results = response.Search;
      }
      this.isLoading = false;
    });
  }

  onSearchChange(event: any) {
    const query = event.detail.value;
    this.searchSubject.next(query);
  }
}
```

## Exemple 10 : Gérer les erreurs avec retry

```typescript
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

this.omdbService.search('Matrix').pipe(
  retry(2),  // Réessayer 2 fois en cas d'erreur
  catchError(error => {
    console.error('Erreur après 2 tentatives:', error);
    return throwError(() => new Error('Impossible d\'accéder à l\'API'));
  })
).subscribe({
  next: (response) => {
    console.log('Succès:', response);
  },
  error: (err) => {
    console.error('Erreur finale:', err);
    // Afficher un message à l'utilisateur
  }
});
```

## Ressources utiles

- [RxJS Operators](https://rxjs.dev/api)
- [Angular HTTP Client](https://angular.io/guide/http)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [OMDb API Documentation](https://www.omdbapi.com/)
