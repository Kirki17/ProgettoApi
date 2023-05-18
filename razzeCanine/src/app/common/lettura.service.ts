import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { Dog } from '../dog';

@Injectable({
  providedIn: 'root'
})
export class LetturaService {

  private currentDog !: Dog; 
  private vettoreDati !: Dog[];
  private login : boolean; 

  constructor(private mioHttp: HttpClient) {
    this.currentDog = new Dog(2, 1, 1, 4, 3, 1, 2, 3, "https://api-ninjas.com/images/dogs/akita.jpg",
      28, 28, 14, 100, 130, 26, 26, 10, 70, 100, "Akita",
      3, 5, 3, 3);
      this.login = false;     
  }

  getDati(url: String): Observable<any> {
    return this.mioHttp.get(
      "" + url,
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

  getCurrentDog(): Dog{
    return this.currentDog; 
  }

  setCurrentDog(dog: Dog){
    this.currentDog = dog; 
  }

  getVettoreDati(){
    return this.vettoreDati;
  }

  setVettoreDati(vettoreDati: Dog[]){
    this.vettoreDati = vettoreDati;
  }
  
  getLogin(): boolean{
    return this.login;
  }

  setLogin(login: boolean){
    this.login = login;
  }
}
