import { Component } from '@angular/core';
import { City } from '../city';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CityService } from '../city.service';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  cities: City[] =[];
  constructor(private cityService:CityService){}

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    console.log("hewwo")
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }
}
