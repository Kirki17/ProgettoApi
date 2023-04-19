import { Component } from '@angular/core';
import { LetturaService } from '../common/lettura.service';

@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.css']
})
export class DatiComponent {
  vettoreDati: any; 
  stringa: string; 
  datiPronti: boolean; 

  constructor(public leggi: LetturaService){
    this.stringa = ""; 
    this.datiPronti = false; 
  }

  letturaDeiDati() {
    this.stringa = "In attesa dei dati";
    this.leggi.getDati("https://api.api-ninjas.com/v1/dogs?name=a").subscribe(dati => {
      if (typeof dati[0] === 'string' || dati[0] instanceof String) { //dati non arrivati 
        this.stringa = "Si è verificato un errore";
      } else { //dati arrivati correttamente
        this.stringa = ""; 
        this.vettoreDati = dati;
        console.log(this.vettoreDati);
      }
    })
  }
}
