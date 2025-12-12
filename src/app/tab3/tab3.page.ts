import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { OmdbService, OmdbSearchResult, OmdbMovieDetail } from '../services/omdb.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface OmdbSearchResultWithRating extends OmdbSearchResult {
  imdbRating?: string;
  isLoadingRating?: boolean;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit, OnDestroy {
  private omdbService = inject(OmdbService);
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  searchQuery = '';
  searchResults: OmdbSearchResultWithRating[] = [];
  selectedItem: OmdbMovieDetail | null = null;
  isLoading = false;
  hasSearched = false;
  error: string | null = null;

  constructor() {}

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((query: string) => {
      this.performSearch(query);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchSubject.complete();
  }

  onSearch(query: string) {
    this.searchQuery = query;
    this.searchSubject.next(query);
  }

  private performSearch(query: string) {
    if (!query.trim()) {
      this.searchResults = [];
      this.hasSearched = false;
      this.error = null;
      return;
    }

    this.isLoading = true;
    this.error = null;
    this.selectedItem = null;

    this.omdbService.search(query).subscribe({
      next: (response: any) => {
        if (response.Response === 'True' && response.Search) {
          this.searchResults = response.Search.map((result: OmdbSearchResult) => ({
            ...result,
            isLoadingRating: true
          }));
          this.hasSearched = true;
          
          // Charger les notes IMDb pour chaque résultat
          this.searchResults.forEach((result, index) => {
            this.omdbService.getDetails(result.imdbID).subscribe({
              next: (details: OmdbMovieDetail) => {
                if (this.searchResults[index]) {
                  this.searchResults[index].imdbRating = details.imdbRating;
                  this.searchResults[index].isLoadingRating = false;
                }
              },
              error: (err: any) => {
                if (this.searchResults[index]) {
                  this.searchResults[index].isLoadingRating = false;
                }
              }
            });
          });
        } else {
          this.searchResults = [];
          this.error = 'Aucun résultat trouvé';
          this.hasSearched = true;
        }
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Erreur API:', err);
        this.error = 'Erreur lors de la recherche. Veuillez réessayer.';
        this.isLoading = false;
      }
    });
  }

  onSelectResult(result: OmdbSearchResultWithRating) {
    this.omdbService.getDetails(result.imdbID).subscribe({
      next: (details: OmdbMovieDetail) => {
        this.selectedItem = details;
      },
      error: (err: any) => {
        console.error('Erreur lors de la récupération des détails', err);
        this.error = 'Erreur lors du chargement des détails';
      }
    });
  }

  closeDetails() {
    this.selectedItem = null;
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
    this.selectedItem = null;
    this.hasSearched = false;
    this.error = null;
    this.searchSubject.next('');
  }
}
