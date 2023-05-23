import { Component, EventEmitter, Output } from '@angular/core';
import { LetturaService } from '../common/lettura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  lastPage: any;

  constructor(public service: LetturaService, private readonly router: Router) {
    this.service.setLogin(false);
  }

  ngDoCheck() {
    this.lastPage = this.service.getPage();
  }

  login() {
    if (localStorage.getItem(this.username) && localStorage.getItem(this.username) == this.password) { //se un utente esiste deve controllare la password
      this.service.setLogin(true);
      if (this.lastPage != 'info') {
        this.service.setDatiPronti(true);
      }
      this.router.navigate([this.lastPage]);
    } else {
      alert("Incorrect username or password");
      this.service.setLogin(false);
    }
  }

  register() {
    if (localStorage.getItem(this.username) == null) { // utente non esistente
      if (this.password.trim().length < 8) {
        alert("The password must be at least 8 characters long and cannot contain spaces")
      } else {
        localStorage.setItem(this.username, this.password);
        this.service.setLogin(true);
        if (this.lastPage != 'info') {
          this.service.setDatiPronti(true);
        }
        this.router.navigate([this.lastPage]);
      }
    } else {
      alert("This username is already used");
      this.service.setLogin(false);
    }
  }
}
