import { Component, Input } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { LetturaService } from '../common/lettura.service';


@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.css']
})
export class DatiComponent {
  vettoreDati: any[] = []; 
  urlBase: string; 
  stringa: string; 
  altreRazze: boolean; 
  numeroPg: number = 0; 
  datiPronti: boolean; 
  @Input() ricerca: string; 

  constructor(public leggi: LetturaService){
    this.ricerca = "golden retriever";
    this.stringa = ""; 
    this.altreRazze = false; 
    this.urlBase = "https://api.api-ninjas.com/v1/dogs?name=";
    this.datiPronti = false; 
    this.letturaDeiDati();
  }

  letturaDeiDati() {
    this.stringa = "In attesa dei dati";

    this.leggi.getDati(this.urlBase +this.ricerca + "&offset=" + this.numeroPg +"0").subscribe(dati => {
      if (typeof dati[0] === 'string' || dati[0] instanceof String || dati[0] == null) { //dati non arrivati 
        this.stringa = "Si è verificato un errore";
        this.vettoreDati = []; 
        this.datiPronti = false; 
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

  info(razza: string){
    console.log(razza); 
  }
}
