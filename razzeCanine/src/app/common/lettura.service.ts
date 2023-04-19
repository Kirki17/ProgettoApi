import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetturaService {

  constructor(private mioHttp: HttpClient) { }

  getDati(url: String): Observable<any> {
    return this.mioHttp.get(
      "" + url,
      //"https://api.api-ninjas.com/v1/dogs?name=",
      //"https://api.api-ninjas.com/v1/dogs?min_life_expectancy=10&offset=10",
      { headers: new HttpHeaders().set('X-Api-Key', 'lUv3vNT/qnShUCJmkKVsXg==c2Jh13Y5aetF7KKb') }
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('An error occurred:', error.error);
      return [];
    } else if (error.status === 400) {
      var stringa: String; 
      stringa = "Parametro non valido"; 
      console.log(stringa, error.status);
      return [stringa];
    } else {
      console.log(
        `Backend returned code ${error.status}, body was: `, error.error);
        return [];
    }
  }
}