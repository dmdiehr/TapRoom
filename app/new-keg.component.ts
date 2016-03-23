import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Price Per Pint" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="Alcohol by Volume" class="col-sm-8 input-lg" #newAbv>
    <button (click)="addKeg(newName, newBrand, newPrice, newAbv)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(beerName: HTMLInputElement, beerBrand: HTMLInputElement, beerPrice: HTMLInputElement, beerAbv: HTMLInputElement){
    var beerArray = [beerName.value, beerBrand.value, beerPrice.value, beerAbv.value];
    this.onSubmitNewKeg.emit(beerArray);
    beerName.value="";
    beerBrand.value="";
    beerPrice.value="";
    beerAbv.value="";

  }
}
