import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg-display.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { TappedPipe } from './tapped.pipe';
import {KegPourComponent} from './keg-pour.component';


@Component({
  selector: 'keg-list',
  pipes: [TappedPipe],
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent, KegPourComponent],
  template: `
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div id="tappedDiv">
          <h5>Tapped Kegs</h5>
          <div *ngFor="#currentKeg of kegList | tapped:filterTapped">
            <keg-display
              (click)="kegClicked(currentKeg)"
              [class.selected]="currentKeg === selectedKeg"
              [keg]="currentKeg">
            </keg-display>
            <keg-pour [keg]="currentKeg">
            </keg-pour>
          </div>


        </div>
      </div>
      <div class="col-sm-4">
        <div id="notTappedDiv">
          <h5>Inventory</h5>
          <keg-display *ngFor="#currentKeg of kegList | tapped:filterNotTapped"
            (click)="kegClicked(currentKeg)"
            [class.selected]="currentKeg === selectedKeg"
            [keg]="currentKeg">
          </keg-display>
        </div>
      </div>
      <div class="col-sm-4">
        <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
      </div>
    </div>
    <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  </div>
  `
})
export class KegListComponent {
  public filterTapped: string = "tapped";
  public filterNotTapped: string = "notTapped";
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
  deleteKeg(keg: Keg): void {
    var kegIndex = this.kegList.indexOf(keg);
    this.kegList.slice(kegIndex, 1);
  }
  onChange(filterOption){
    this.filterTapped = filterOption;
    console.log(this.filterTapped);
  }
}


// <select (change)="onChange($event.target.value)" class="filter">
//   <option value="all" selected="selected">Full Inventory</option>
//   <option value="notTapped">Untapped</option>
//   <option value="tapped">Tapped</option>
// </select>
