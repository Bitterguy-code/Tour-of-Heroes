import { Component } from '@angular/core';
import { NgIf, UpperCasePipe, Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { CityService } from '../city.service';
import { Hero } from '../hero';
import { City } from '../city';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe, RouterLink],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  cities: City[] = [];
  hero: Hero | undefined;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private cityService: CityService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getCities();
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(()=> this.goBack());
    }
  }
}
