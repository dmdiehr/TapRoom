import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <h3>Edit Name: </h3>
      <input [(ngModel)]="keg.name" class="col-sm-3 input-sm"/>
      <h3>Edit Brand: </h3>
      <input [(ngModel)]="keg.brand" class="col-sm-3 input-sm"/>
      <h3>Edit Price: </h3>
      <input [(ngModel)]="keg.price" class="col-sm-3 input-sm"/>
      <h3>Edit Abv: </h3>
      <input [(ngModel)]="keg.abv" class="col-sm-3 input-sm"/>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
