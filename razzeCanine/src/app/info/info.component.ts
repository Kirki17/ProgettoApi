import { Component } from '@angular/core';
import { LetturaService } from '../common/lettura.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  dog: Dog; 

  constructor(public leggi: LetturaService){
    this.dog = this.leggi.getCurrentDog(); 
  }

  ngOnInit(){
    this.dog = this.leggi.getCurrentDog(); 
    console.log(this.dog); 
  }
}
