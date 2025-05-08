import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citiesUrl = 'api/cities';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message:string) {
    console.log(message);
    this.messageService.add(`CityService: ${message}`);
  }

  getCities(): Observable<City[]> {
    console.log("cities service")
    return this.http.get<City[]>(this.citiesUrl)
    .pipe(
      tap(() => this.log("fetched cities")),
      catchError(this.handleError<City[]>('getCities', []))
    );
  }

  getCity(id: number): Observable<City> {
    const url = `${this.citiesUrl}/id=${id}`
    return this.http.get<City>(url, {responseType: 'json'})
    .pipe(
      tap(() => this.log(`fetched city id=${id}`)),
      catchError(this.handleError<City>(`getCity id=${id}`))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error}`);
      return of(result as T);
    }
  }
}
