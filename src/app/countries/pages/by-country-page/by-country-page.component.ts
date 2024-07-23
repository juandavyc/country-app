import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {
  }

  searchByCountry(value: string): void {
    this.countriesService.searchByCountry(value).subscribe(
      countries => {
        this.countries = countries;
      }
    );
  }
}
