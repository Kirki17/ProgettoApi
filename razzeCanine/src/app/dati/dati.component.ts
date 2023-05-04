import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { LetturaService } from '../common/lettura.service';


@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.css']
})
export class DatiComponent {
  @Input() vettoreDati: any[] = [];
  @Output() out = new EventEmitter<any>(); 
  altreRazze: boolean;
  numeroPg: number = 0;
  datiPronti: boolean;

  constructor(public leggi: LetturaService) {
    this.altreRazze = false;
    this.datiPronti = false;
    //this.letturaDeiDati();
  }

  /*letturaDeiDati() {
    this.stringa = "In attesa dei dati";

    this.leggi.getDati(this.urlBase + this.stringaRicerca + "&offset=" + this.numeroPg + "0").subscribe(dati => {
      if (typeof dati[0] === 'string' || dati[0] instanceof String || dati[0] == null) { //dati non arrivati 
        this.stringa = "Si è verificato un errore";
        this.vettoreDati = [];
        this.datiPronti = false;
      } else { //dati arrivati correttamente
        this.stringa = "";
        this.vettoreDati = dati;
        this.datiPronti = true;

        console.log(this.vettoreDati);
      }
    })
  }*/

  ricerca(dati: any[]) {
    console.log("Dati"); 
    console.log(dati);
    this.vettoreDati = dati;
    if (dati.length == 0)
      this.datiPronti = false;
    else
      this.datiPronti = true;

    //controllo per pagina
    if (this.vettoreDati.length == 20)
      this.altreRazze = true;
    else if (this.vettoreDati.length < 20)
      this.altreRazze = false;
  }

  paginaSuccessiva() {
    this.numeroPg += 2;
    this.datiPronti = false;
    //this.letturaDeiDati();
  }
  paginaPrecedente() {
    this.numeroPg -= 2;
    this.datiPronti = false;
    //this.letturaDeiDati();
  }

  info(razza: string) {
    this.datiPronti = false;
    this.vettoreDati =[]; 
    this.out.emit(razza); 
  }
}
