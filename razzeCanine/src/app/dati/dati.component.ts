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
  ricerca: string = "";
  altreRazze: boolean;
  numeroPg: number = 0;
  datiPronti: boolean;
  urlBase: string;
  stringa: string;
  account: string;
  loginCheck: boolean;

  filtri: boolean; 
  shedding: number = 0;
  barking: number = 0; 
  energy: number = 0; 
  protectiveness: number = 0; 
  trainability: number = 0; 

  ngOnInit() {
    this.leggi.setPage('/');
  }

  ngDoCheck() {
    console.log("Cambiamento");
    this.loginCheck = this.leggi.getLogin();
    this.datiPronti = this.leggi.getDatiPronti();
    if (this.loginCheck) { //true = loggato
      this.account = "Login ✔";
    } else {
      this.account = "Login";
    }
  }

  constructor(public leggi: LetturaService) {
    this.loginCheck = leggi.getLogin();
    this.altreRazze = false;
    this.datiPronti = false;
    this.filtri = false; 
    leggi.setDatiPronti(this.datiPronti);
    if (this.loginCheck) { //true = loggato
      this.account = "Loggato";
    } else {
      this.account = "Login";
    }
    //this.ricerca = "golden retriever";
    this.stringa = "";
    this.urlBase = 'https://api.api-ninjas.com/v1/dogs?&';
  }

  letturaDeiDati() {
    this.stringa = "Waiting for the data";
    this.numeroPg = 0; 
    let url: string = this.urlBase; 
    if(this.shedding != 0){
      url += "shedding=" + this.shedding +"&"; 
    }
    if(this.barking != 0){
      url += "barking=" + this.barking +"&"; 
    }
    if(this.energy != 0){
      url += "energy=" + this.energy +"&"; 
    }
    if(this.protectiveness != 0){
      url += "protectiveness=" + this.protectiveness +"&"; 
    }
    if(this.trainability != 0){
      url += "trainability=" + this.trainability +"&"; 
    }
    console.log(url + "&offset=" + this.numeroPg + "0");

    this.vettoreDati = [];
    this.leggi.getDati(url +"name=" +this.ricerca.trim() + "&offset=" + this.numeroPg + "0").subscribe(dati => {
      if (typeof dati[0] === 'string' || dati[0] instanceof String) { //dati non arrivati 
        this.stringa = "Something went wrong";
        this.vettoreDati = [];
        this.datiPronti = false;
        this.leggi.setDatiPronti(this.datiPronti);
      } else if(dati[0] == null){
        this.stringa = "No breeds found";
      }else { //dati arrivati correttamente
        this.stringa = "";
        let id: number = 0;
        dati.forEach((doggo: any) => {
          this.vettoreDati.push(new Dog(doggo.barking, doggo.coat_length, doggo.drooling, doggo.energy, 
            doggo.good_with_children, doggo.good_with_other_dogs, doggo.good_with_strangers, doggo.grooming, 
            doggo.playfulness, doggo.protectiveness,doggo.shedding, doggo.trainability, doggo.image_link, 
            doggo.max_height_female, doggo.max_height_male, doggo.max_life_expectancy, doggo.max_weight_female, 
            doggo.max_weight_male, doggo.min_height_female, doggo.min_height_male, doggo.min_life_expectancy,
            doggo.min_weight_female, doggo.min_weight_male, doggo.name));
        });
        //this.vettoreDati = dati;
        if (this.vettoreDati.length < 20) {
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
      if (this.vettoreDati[i].name == razza) {
        this.leggi.setCurrentDog(this.vettoreDati[i]);
        trovato = true;
      }
    }

    this.datiPronti = false;
    this.leggi.setDatiPronti(this.datiPronti);
    this.vettoreDati = [];
  }

  login() {
    this.datiPronti = false;
    this.leggi.setDatiPronti(this.datiPronti);
    console.log(this.vettoreDati);
  }

  showFiltri(){
    this.filtri = !this.filtri;
  }
}
