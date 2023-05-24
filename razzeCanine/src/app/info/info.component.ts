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

  gwC: string = "";
  gwD: string = "";
  gwS: string = "";

  bark: string = "";
  coat: string = "";
  drool: string = "";
  ener: string = "";
  groom: string = "";
  play: string = "";
  protect: string = "";
  shed: string = "";
  train: string = "";

  constructor(public leggi: LetturaService) {
    this.dog = this.leggi.getCurrentDog();
    this.emoji();

    this.login = this.leggi.getLogin();
    this.leggi.setLogin(this.login);
  }

  ngOnInit() {
    this.dog = this.leggi.getCurrentDog();
    this.emoji();
    this.leggi.setPage('info');
    console.log(this.dog);
  }

  apri() {
    window.open(this.dog.image_link);
  }

  emoji() {
    if (this.login == true) {
      if (this.dog.barking == "★★★★☆" || this.dog.barking == "★★★★★") {
        this.bark = "🔊";
      } else {
        this.bark = "";
      }

      if (this.dog.coat_length == "★★★★☆" || this.dog.coat_length == "★★★★★") {
        this.coat = "✂";
      } else {
        this.coat = "";
      }

      if (this.dog.drooling == "★★★★☆" || this.dog.drooling == "★★★★★") {
        this.drool = "💦";
      } else {
        this.drool = "";
      }

      if (this.dog.energy == "★★★★☆" || this.dog.energy == "★★★★★") {
        this.ener = "🔋";
      } else {
        this.ener = "";
      }

      if (this.dog.grooming == "★★★★☆" || this.dog.grooming == "★★★★★") {
        this.groom = "🧼";
      } else {
        this.groom = "";
      }

      if (this.dog.playfulness == "★★★★☆" || this.dog.playfulness == "★★★★★") {
        this.play = "⚾";
      } else {
        this.play = "";
      }

      if (this.dog.protectiveness == "★★★★☆" || this.dog.protectiveness == "★★★★★") {
        this.protect = "👿";
      } else {
        this.protect = "";
      }

      if (this.dog.shedding == "★★★★☆" || this.dog.shedding == "★★★★★") {
        this.shed = "🧹";
      } else {
        this.shed = "";
      }

      if (this.dog.trainability == "★★★★☆" || this.dog.trainability == "★★★★★") {
        this.train = "🏋️‍♂️";
      } else {
        this.train = "";
      }

      if (this.dog.good_with_children == "★★★★★" || this.dog.good_with_children == "★★★★☆") {
        this.gwC = "👍";
      } else if (this.dog.good_with_children == "★★★☆☆" || this.dog.good_with_children == "★★☆☆☆") {
        this.gwC = "👍👎";
      } else if (this.dog.good_with_children == "★☆☆☆☆" || this.dog.good_with_children == "☆☆☆☆☆") {
        this.gwC = "👎";
      }

      if (this.dog.good_with_other_dogs == "★★★★★" || this.dog.good_with_other_dogs == "★★★★☆") {
        this.gwD = "👍";
      } else if (this.dog.good_with_other_dogs == "★★★☆☆" || this.dog.good_with_other_dogs == "★★☆☆☆") {
        this.gwD = "👍👎";
      } else if (this.dog.good_with_other_dogs == "★☆☆☆☆" || this.dog.good_with_other_dogs == "☆☆☆☆☆") {
        this.gwD = "👎";
      }

      if (this.dog.good_with_strangers == "★★★★★" || this.dog.good_with_strangers == "★★★★☆") {
        this.gwS = "👍";
      } else if (this.dog.good_with_strangers == "★★★☆☆" || this.dog.good_with_strangers == "★★☆☆☆") {
        this.gwS = "👍👎";
      } else if (this.dog.good_with_strangers == "★☆☆☆☆" || this.dog.good_with_strangers == "☆☆☆☆☆") {
        this.gwS = "👎";
      }
    } else {
      this.bark = "";
      this.coat = "";
      this.drool = "";
      this.ener = "";
      this.groom = "";
      this.play = "";
      this.protect = "";
      this.shed = "";
      this.train = "";
    }
  }
}
