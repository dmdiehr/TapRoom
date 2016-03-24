import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h5>Add Keg:</h5>
    <fieldset class="form-group">
      <label></label>
      <input type="text" placeholder="name" #newName><br>
      <label></label>
      <input type="text" placeholder="Brand" #newBrand><br>
      <label></label>
      <input type="text" placeholder="Price Per Pint" #newPrice><br>
      <label></label>
      <input type="text" placeholder="Alcohol by Volume" #newAbv><br>
      <button (click)="addKeg(newName, newBrand, newPrice, newAbv)" class="btn-success btn-sm">Add</button>
    </fieldset>
  </div>
  `
})
export class NewKegComponent {  public onSubmitNewKeg: EventEmitter<String[]>;
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
