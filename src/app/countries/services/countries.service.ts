import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {


  private apiUrl = 'https://restcountries.com/v3.1';
  constructor(private httpClient: HttpClient) { }
  searchCapital(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${term}`)
    .pipe(
      // tap(countries => console.log('tap 1', countries )),
      // map(countries => []),
      // tap(countries => console.log('tap 2', countries))
    );
  }
  searchRegion(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${term}`)
    .pipe(
      // tap(countries => console.log('tap 1', countries )),
      // map(countries => []),
      // tap(countries => console.log('tap 2', countries))
    );
  }
  searchByCountry(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe(
      // tap(countries => console.log('tap 1', countries )),
      // map(countries => []),
      // tap(countries => console.log('tap 2', countries))
    );
  }

}
