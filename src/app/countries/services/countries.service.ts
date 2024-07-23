import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {


  private apiUrl = 'https://restcountries.com/v3.1';
  constructor(private httpClient: HttpClient) { }
  searchCapital(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }
  searchRegion(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }
  searchByCountry(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> { // devuelve country o null
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      )
  }

}
