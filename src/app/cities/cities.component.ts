import { Component } from '@angular/core';
import { City } from '../city';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  cities: City[] =[];
  heroes: Hero[] =[];
  constructor(
    private utilityService: UtilityService
  ){}

  ngOnInit(): void {
    this.utilityService.getCities();
    this.utilityService.getHeroes();
  }

  add(name:string): void {
    name = name.trim();
    if (name) {
      let dupe = false;

    }
  }
}
