import { Component} from  'angular2/core';
import { Keg } from './keg.model';


/////////////keg-pour < keg-list < root /////

@Component({
  selector: 'keg-pour',
  inputs: ['keg'],
  template: `
    <button (click)="pourBeer()">Pour</button>
  `
})

export class KegPourComponent {
  public keg: Keg;

  pourBeer(){
    this.keg.volume -= 1;

  }
}
