import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { LetturaService } from '../common/lettura.service';
import { Dog } from '../dog';


@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.css']
})
export class DatiComponent {
  vettoreDati: Dog[] = [];
  ricerca: string; 
  altreRazze: boolean;
  numeroPg: number = 0;
  datiPronti: boolean;
  urlBase: string; 
  stringa: string; 
  account: string; 
  loginCheck : boolean; 

  ngOnInit(){
    this.leggi.setPage('/');
  }

  ngDoCheck(){
    console.log("Cambiamento");
    this.loginCheck = this.leggi.getLogin();
    this.datiPronti = this.leggi.getDatiPronti(); 
    if(this.loginCheck){ //true = loggato
      this.account = "Loggato"; 
    } else {
      this.account = "Login"; 
    }
  }

  constructor(public leggi: LetturaService) {
    this.loginCheck = leggi.getLogin(); 
    this.altreRazze = false;
    this.datiPronti = false;
    leggi.setDatiPronti(this.datiPronti); 
    if(this.loginCheck){ //true = loggato
      this.account = "Loggato"; 
    } else {
      this.account = "Login"; 
    }
    //this.ricerca = "golden retriever";
    this.ricerca = "a";
    this.stringa = ""; 
    this.urlBase = "https://api.api-ninjas.com/v1/dogs?name=";
  }

  letturaDeiDati() {
    this.stringa = "In attesa dei dati";
    this.vettoreDati = []; 
    this.leggi.getDati(this.urlBase + this.ricerca + "&offset=" + this.numeroPg + "0").subscribe(dati => {
      if (typeof dati[0] === 'string' || dati[0] instanceof String || dati[0] == null) { //dati non arrivati 
        this.stringa = "Si è verificato un errore";
        this.vettoreDati = [];
        this.datiPronti = false;
        this.leggi.setDatiPronti(this.datiPronti); 
      } else { //dati arrivati correttamente
        this.stringa = "";
        let id: number = 0; 
       dati.forEach((doggo:any) => {
          this.vettoreDati.push(new Dog(doggo.barking, doggo.coat_length, doggo.drooling, doggo.energy, doggo.good_with_children, doggo.good_with_other_dogs, 
            doggo.good_with_strangers, doggo.grooming, doggo.image_link, doggo.max_height_female, doggo.max_height_male, doggo.max_life_expectancy, 
            doggo.max_weight_female, doggo.max_weight_male, doggo.min_height_female, doggo.min_height_male, doggo.min_life_expectancy, 
            doggo.min_weight_female, doggo.min_weight_male, doggo.name, doggo.playfulness, doggo.protectiveness, doggo.shedding, doggo.trainability,)); 
        });
        //this.vettoreDati = dati;
        if(this.vettoreDati.length < 20){
          this.altreRazze = false; 
        } else {
          this.altreRazze = true; 
        }
        this.datiPronti = true;
        this.leggi.setDatiPronti(this.datiPronti); 

        console.log(this.vettoreDati);
      }
    })
  }

  paginaSuccessiva() {
    this.numeroPg += 2;
    this.datiPronti = false;
    this.leggi.setDatiPronti(this.datiPronti); 
    this.letturaDeiDati();
  }
  
  paginaPrecedente() {
    this.numeroPg -= 2;
    this.datiPronti = false;
    this.leggi.setDatiPronti(this.datiPronti); 
    this.letturaDeiDati();
  }

  info(razza: string) {
    let trovato: boolean = false; 
    
    for (let i = 0; i < this.vettoreDati.length || !trovato; i++) {
      if(this.vettoreDati[i].name == razza){
        this.leggi.setCurrentDog(this.vettoreDati[i]); 
        trovato = true; 
      }
    }

    this.datiPronti = false;
    this.leggi.setDatiPronti(this.datiPronti); 
    this.vettoreDati =[]; 
  }

  login(){
    this.datiPronti = false; 
    this.leggi.setDatiPronti(this.datiPronti); 
    console.log(this.vettoreDati);
  }
}
