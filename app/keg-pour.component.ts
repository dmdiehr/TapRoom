import { Component, EventEmitter} from  'angular2/core';
import { Keg } from './keg.model';


/////////////keg-pour < keg-list < root /////

@Component({
  selector: 'keg-pour',
  inputs: ['keg'],
  outputs: ['empty'],
  template: `
    <button (click)="pourBeer()">Pour</button>
  `
})

export class KegPourComponent {
  public keg: Keg;
  public empty: EventEmitter<Keg>;
  constructor(){
    this.empty = new EventEmitter();
  }
  pourBeer(){
    if (this.keg.volume === 1){
      this.empty.emit(this.keg);
    }
    else{
      this.keg.volume -= 1;
    }
  }
}
