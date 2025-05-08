import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id:0, name:'Dr.Nice',  city: 0},
      {id:1, name:'Bombasto', city: 0},
      {id:2, name:'Celeritas', city: 0},
      {id:3, name:'Magenta', city: 1},
      {id:4, name:'RubberMan',  city: 1},
      {id:5, name:'Dynama', city: 1},
      {id:6, name:'Dr. IQ', city: 2},
      {id:7, name:'Magma', city: 2},
      {id:8, name:'Tornado', city: 2}
    ];

    const cities = [
      {id:0, name:'New York', heroes: [0,1,2]},
      {id:1, name:'Chicago', heroes: [3,4,5]},
      {id:2, name:'Dallas', heroes: [6,7,8]}
    ];
    return {heroes, cities};
  }

  genId<Table extends Hero | City>(myTable: Table[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(thing => thing.id)) + 1: 0;
  }
}
