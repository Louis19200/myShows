import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OmdbSearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface OmdbSearchResponse {
  Search: OmdbSearchResult[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export interface OmdbMovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiKey = 'eb1e3ea9';
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  search(query: string, type?: string): Observable<OmdbSearchResponse> {
    let url = `${this.apiUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(query)}`;
    
    if (type) {
      url += `&type=${type}`;
    }
    
    return this.http.get<OmdbSearchResponse>(url);
  }

  getDetails(imdbID: string): Observable<OmdbMovieDetail> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&i=${imdbID}&plot=full`;
    return this.http.get<OmdbMovieDetail>(url);
  }
}
