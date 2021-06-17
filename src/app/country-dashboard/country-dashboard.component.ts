import { Component, OnInit } from '@angular/core';
import { CountryFetcherService } from '../country-fetcher.service';



@Component({
  selector: 'app-country-dashboard',
  templateUrl: './country-dashboard.component.html',
  styleUrls: ['./country-dashboard.component.css']
})
export class CountryDashboardComponent implements OnInit {

  constructor(private countryFetcherService: CountryFetcherService) { }
  countryData:any;
  filteredCountryData:any;
  ngOnInit(): void {
    this.getCountries();
    
  }
  
  getCountries(): void{
    this.countryFetcherService.getCountries().subscribe((success: any)=>{
        this.countryData=success;
        this.filteredCountryData=success;
      },(error: any)=>{
          this.countryData=error
        });
  }

  printCountries(): void{
    console.log(this.countryData);
  }
}
