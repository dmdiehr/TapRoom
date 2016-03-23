import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { TappedPipe } from './tapped.pipe';


@Component({
  selector: 'keg-list',
  pipes: [TappedPipe],
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Full Inventory</option>
    <option value="notTapped">Untapped</option>
    <option value="tapped">Tapped</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | tapped:filterTapped"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public filterTapped: string = "notTapped";
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(beerArray: string[]): void {
    this.kegList.push(
      new Keg(beerArray[0], beerArray[1], parseInt(beerArray[2]), parseInt(beerArray[3]))
    );
  }
  onChange(filterOption){
    this.filterTapped = filterOption;
    console.log(this.filterTapped);
  }
}
