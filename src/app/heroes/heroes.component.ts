import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeroService } from '../hero.service';
import { UtilityService } from '../utility.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];


  constructor(
    private heroService:HeroService,
    private utilityService: UtilityService
  ){}

  ngOnInit():void {
    this.utilityService.getHeroes();
  }

  add(name: string, city: string): void {
    name = name.trim();
    let cityID = parseInt(city)
    if (name && cityID) {
      let dupe = false
      for (let hero in this.heroes) {
        if (this.heroes[hero].name === name){
          dupe = true
        }
      }
      if (!dupe){
        this.heroService.addHero({name:name, city:cityID} as Hero).subscribe(hero => this.heroes.push(hero));
      } else {
        throw new Error(`Hero ${name} already exist!`)
      }
    } else {
      if (!name) {
        throw new Error(`No name entered`)
      }

      if (!city) {
        throw new Error('No city entered')
      }
    }
  }

  delete(hero:Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
