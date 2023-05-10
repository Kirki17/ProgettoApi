import { Component } from '@angular/core';
import { LetturaService } from '../common/lettura.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {

  constructor(public leggi: LetturaService){
  }
  ngOnInit(){
    let dog: Dog; 
    dog = this.leggi.getCurrentDog(); 
    console.log(dog); 
  }
}
