import { Component } from '@angular/core';
import { City } from '../city';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CityService } from '../city.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  cities: City[] =[];
  heroes: Hero[]=[];
  constructor(
    private cityService:CityService,
    private heroService:HeroService

  ){}

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name:string): void {
    name = name.trim();

    if (name) {
      let dupe = false;
      for (let city in this.cities) {
        if (this.cities[city].name === name){
          dupe = true
        }
      }

      if(!dupe) {
        this.cityService.addCity({name:name} as City).subscribe(city => this.cities.push(city)) 
      }
    }
  }

  delete(city:City): void {
    this.cities = this.cities.filter(c => c !== city);
    this.cityService.deleteCity(city.id).subscribe();
  }
}
