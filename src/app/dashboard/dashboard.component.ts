import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { City } from '../city';
import { HeroService } from '../hero.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CityService } from '../city.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  cities: City[] = [];

  constructor(
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.utilityService.getHeroes();
    this.utilityService.getCities();
  }
}
