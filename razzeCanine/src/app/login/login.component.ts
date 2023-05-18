import { Component } from '@angular/core';
import { LetturaService } from '../common/lettura.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  testoBottone: string;

  constructor(public service: LetturaService) {
    this.testoBottone = "Premi per validarti";
    this.service.setLogin(false);
  }

  abilita() {
    if (this.username.trim().toUpperCase() == "CLAUDIO" &&
      this.password == "Io") {

      this.testoBottone = "SEI validato";
      // abilitato l'utente alla visualizzazione
      this.service.setLogin(true);
    }
  }
}
