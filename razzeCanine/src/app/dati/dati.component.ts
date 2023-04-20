import { Component } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { LetturaService } from '../common/lettura.service';

@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.css']
})
export class DatiComponent {
  vettoreDati: any[] = []; 
  url: string; 
  stringa: string; 
  altreRazze: boolean; 
  numeroPg: number = 0; 
  datiPronti: boolean; 

  constructor(public leggi: LetturaService){
    this.stringa = ""; 
    this.altreRazze = false; 
    this.url = "https://api.api-ninjas.com/v1/dogs?name=dog";
    this.datiPronti = false; 
  }

  letturaDeiDati() {
    this.stringa = "In attesa dei dati";
    this.leggi.getDati(this.url + "&offset=" + this.numeroPg +"0").subscribe(dati => {
      if (typeof dati[0] === 'string' || dati[0] instanceof String) { //dati non arrivati 
        this.stringa = "Si è verificato un errore";
      } else { //dati arrivati correttamente
        this.stringa = ""; 
        this.vettoreDati = dati;
        this.datiPronti = true; 

        //controllo per pagina
        if(this.vettoreDati.length == 20){
          this.altreRazze = true; 
        } else if(this.vettoreDati.length < 20){ 
          this.altreRazze = false; 
        }
        console.log(this.vettoreDati);
      }
    })
  }

  paginaSuccessiva(){
    this.numeroPg += 2;
    this.datiPronti = false; 
    this.letturaDeiDati(); 
  }
  paginaPrecedente(){
    this.numeroPg -= 2;
    this.datiPronti = false; 
    this.letturaDeiDati(); 
  }
}
