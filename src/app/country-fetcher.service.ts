import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryFetcherService {

  constructor(
    private http: HttpClient
  ) { }

  countryData:any;
  
  getCountries(){
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }
}
