// This is where functions used in multiple places live. As well as subscriptions to getters in other services

import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { CityService } from './city.service';
import { Hero } from './hero';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private heroService: HeroService,
    private cityService: CityService
  ) { }

  heroes: Hero[] = [];
  cities: City[] = [];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }
}
