import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OmdbService, OmdbSearchResponse, OmdbMovieDetail } from './omdb.service';

describe('OmdbService', () => {
  let service: OmdbService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OmdbService]
    });
    service = TestBed.inject(OmdbService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search for movies/series', (done) => {
    const mockResponse: OmdbSearchResponse = {
      Search: [
        {
          Title: 'The Matrix',
          Year: '1999',
          imdbID: 'tt0133093',
          Type: 'movie',
          Poster: 'https://example.com/poster.jpg'
        }
      ],
      totalResults: '1',
      Response: 'True'
    };

    service.search('The Matrix').subscribe(result => {
      expect(result.Response).toBe('True');
      expect(result.Search.length).toBe(1);
      expect(result.Search[0].Title).toBe('The Matrix');
      done();
    });

    const req = httpMock.expectOne(req => 
      req.url.includes('s=The%20Matrix')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get movie details', (done) => {
    const mockDetail: OmdbMovieDetail = {
      Title: 'The Matrix',
      Year: '1999',
      Rated: 'R',
      Released: '31 Mar 1999',
      Runtime: '136 min',
      Genre: 'Action, Sci-Fi',
      Director: 'Lana Wachowski, Lilly Wachowski',
      Writer: 'Lana Wachowski, Lilly Wachowski',
      Actors: 'Keanu Reeves, Laurence Fishburne',
      Plot: 'A hacker called Neo...',
      Language: 'English',
      Country: 'United States, Australia',
      Awards: '4 wins & 15 nominations',
      Poster: 'https://example.com/poster.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '8.7/10' }],
      Metascore: '73',
      imdbRating: '8.7',
      imdbVotes: '1,500,000',
      imdbID: 'tt0133093',
      Type: 'movie',
      DVD: '06 Jun 2000',
      BoxOffice: '$467,222,728',
      Production: 'Warner Bros.',
      Website: 'N/A',
      Response: 'True'
    };

    service.getDetails('tt0133093').subscribe(result => {
      expect(result.Title).toBe('The Matrix');
      expect(result.imdbRating).toBe('8.7');
      done();
    });

    const req = httpMock.expectOne(req => 
      req.url.includes('i=tt0133093')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockDetail);
  });
});
