import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <h5>Edit Name: </h5>
      <input [(ngModel)]="keg.name"/>
      <h5>Edit Brand: </h5>
      <input [(ngModel)]="keg.brand"/>
      <h5>Edit Price: </h5>
      <input [(ngModel)]="keg.price"/>
      <h5>Edit Abv: </h5>
      <input [(ngModel)]="keg.abv"/>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
