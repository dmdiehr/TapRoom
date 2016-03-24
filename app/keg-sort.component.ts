import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';


///////keg-sort < keg-list < root //////


@Component({
  selector: 'keg-sort',
  outputs: ['sortBy'],
  template: `
    <div class="sort">
      <button #byName (click)="sortEmitter(byName)" class="sort-button" id="sort-name" >Name</button>

      <button #byBrand (click)="sortEmitter(byBrand)" class="sort-button" id="sort-brand" >Brand</button>

      <button (click)="sortEmitter(byPrice)" class="sort-button" id="sort-price" #byPrice>Price</button>

      <button (click)="sortEmitter(byAbv)" class="sort-button" id="sort-abv" #byAbv>ABV</button>

      <button (click)="sortEmitter(byVolume)" class="sort-button" id="sort-volume" #byVolume>Volume</button>

    </div>
  `
})

export class KegSortComponent {
  public sortBy: EventEmitter<string>;
  constructor(){
    this.sortBy = new EventEmitter();
  }
  sortEmitter(sortParameter: HTMLSpanElement){
    this.sortBy.emit(sortParameter.id);
  }
}
