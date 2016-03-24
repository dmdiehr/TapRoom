import { Component } from 'angular2/core';
import { Keg } from './keg.model';

//////////////     keg-display < keg-list < root      /////////////////////
@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <input *ngIf="keg.tapped" type="checkbox" checked (click)="toggleTapped(false)"/>
      <input *ngIf="!keg.tapped" type="checkbox" (click)="toggleTapped(true)"/>
      <label>{{ keg.name }}</label>
      <label>{{ keg.brand }}</label>
      <label>{{ keg.price }} </label>
      <label>{{ keg.abv }}</label>
      <label>{{ keg.volume }}</label>
    </div>
  `
})

export class KegComponent {
  public keg: Keg;

  toggleTapped(setState: boolean){
      this.keg.tapped = setState;
  }
}
