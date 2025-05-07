import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css'
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private serachTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term:string): void {
    this.serachTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.serachTerms.pipe(debounceTime(300), 
                                        distinctUntilChanged(), 
                                        switchMap((term:string) => this.heroService.serachHeroes(term)))
  }
}
