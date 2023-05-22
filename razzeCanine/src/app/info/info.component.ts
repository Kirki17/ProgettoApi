import { Component } from '@angular/core';
import { LetturaService } from '../common/lettura.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css', './info.scss'],
})
export class InfoComponent {
  dog: Dog; 
  login: boolean; 

  constructor(public leggi: LetturaService){
    this.dog = this.leggi.getCurrentDog(); 
    //this.login = this.leggi.getLogin();
    this.login = true; 
    this.leggi.setLogin(this.login); 
  }

  ngOnInit(){
    this.dog = this.leggi.getCurrentDog(); 
    this.leggi.setPage('info'); 
    console.log(this.dog); 
  }

  apri(){
    window.open(this.dog.image_link);
  }
}
