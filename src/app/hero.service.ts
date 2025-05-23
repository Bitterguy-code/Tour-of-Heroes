import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    console.log(message);
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(()=> this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }


  getHeroNo404<Data>(id:number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url, {responseType: 'json'})
    .pipe(
      map(heroes => heroes[0]),
      tap(h => {const outcome = h ? 'fetched' : 'did not find';this.log(`${outcome} hero id=${id}`);}),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    console.log(url)
    return this.http.get<Hero>(url,{responseType: 'json'})
    .pipe(
      tap(_ => this.log(`fetched hero id=${id}`)), 
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero:Hero): Observable<any> {
    const what = this.http.put(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      tap(() => this.log(`Updated hero id=${hero.id}`))
    )
    console.log(what)
    return what;
  }

  addHero(hero:Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      tap((newHero:Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  deleteHero(id:number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions)
    .pipe(
      tap(() => this.log(`deleted hero id=${id}`)), 
      catchError(this.handleError<Hero>('deleteHero')));
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(tap(x => x.length ? this.log(`found heroes matching ${term}`) : this.log(`no heroes matching ${term}`)))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {
      this.log(`${operation} failed: ${error}`);
      return of(result as T);
    }
  }
}
