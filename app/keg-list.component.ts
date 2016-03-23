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
  templateUrl: 'app/keg-list.component.html'
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
    console.log("Empty Keg: " + keg.name);
    var kegIndex = this.kegList.indexOf(keg);
    console.log("Keg Inded: " + kegIndex);
    this.kegList.splice(kegIndex, 1);
    console.log("Keg List After Slice: " + this.kegList)
  }
  onChange(filterOption){
    this.filterTapped = filterOption;
    console.log(this.filterTapped);
  }
}
