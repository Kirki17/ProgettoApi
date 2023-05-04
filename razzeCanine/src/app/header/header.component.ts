import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatiComponent } from '../dati/dati.component';
import { LetturaService } from '../common/lettura.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() ricerca: string;
  @Output() out = new EventEmitter<any>(); 
  vettoreDati: any[] = []; 
  urlBase: string; 
  stringa: string; 
  numeroPg: number = 0; 
  datiPronti: boolean; 

  constructor(public leggi: LetturaService){
    this.ricerca = "golden retriever";
    this.stringa = ""; 
    this.urlBase = "https://api.api-ninjas.com/v1/dogs?name=";
    this.datiPronti = false; 
  }

  cerca(){
    this.stringa = "In attesa dei dati";
    console.log("cerca"); 
    this.leggi.getDati(this.urlBase +this.ricerca + "&offset=" + this.numeroPg +"0").subscribe(dati => {
      if (typeof dati[0] === 'string' || dati[0] instanceof String || dati[0] == null) { //dati non arrivati 
        this.stringa = "Si è verificato un errore";
        this.vettoreDati = []; 
        this.datiPronti = false; 
      } else { //dati arrivati correttamente
        this.stringa = ""; 
        this.vettoreDati = dati;
        this.datiPronti = true; 

        console.log("Header");
        console.log(this.vettoreDati);
      }
      this.out.emit(this.vettoreDati); 
    })
  }
}
