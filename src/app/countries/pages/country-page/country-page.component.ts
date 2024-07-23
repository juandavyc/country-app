import { CountriesService } from './../../services/countries.service';
import { Observable, switchMap, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {


  public country?: Country | null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {

  }
  // para crear loading,
  ngOnInit(): void {
    // observable help
    this.activatedRoute.params
      .pipe(
        // tap(console.log)
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id)) //regresa un nuevo observable
      )
      .subscribe((country) => {
        if (!country) this.router.navigateByUrl('');
        return this.country = country;
      })
  }




}
