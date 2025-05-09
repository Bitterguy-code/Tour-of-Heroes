import { Component } from '@angular/core';
import { Hero } from '../hero';
import { City } from '../city';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe, Location } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe, RouterLink],
  templateUrl: './city-details.component.html',
  styleUrl: './city-details.component.css'
})
export class CityDetailsComponent {
  heroes: Hero[] = [];
  city: City | undefined;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    
    this.getCity();
    this.getHeroes();
  }

  getCity(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.cityService.getCity(id).subscribe(city => this.city = city);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      let filteredHeroes = this.heroes.filter(hero => hero.city === this.city!.id);
      this.heroes = filteredHeroes
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.city) {
      this.cityService.updateCity(this.city).subscribe(() => this.goBack());
    }
  }
}
