import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg-display.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { TappedPipe } from './tapped.pipe';
import {KegPourComponent} from './keg-pour.component';
import {KegSortComponent} from './keg-sort.component';


@Component({
  selector: 'keg-list',
  pipes: [TappedPipe],
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent, KegPourComponent, KegSortComponent],
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
    var kegIndex = this.kegList.indexOf(keg);
    this.kegList.splice(kegIndex, 1);
  }
  onChange(filterOption){
    this.filterTapped = filterOption;
    console.log(this.filterTapped);
  }
  onSort(sortParameter){
    var clonedList = [];
    for(var keg of this.kegList){
      clonedList.push(keg);
    }
    if(sortParameter === "sort-name"){
      var sortedList = [];
      console.log("In if statement");
      for(var i=0; i<this.kegList.length; i++){
        console.log("Outer Loop");
        var lowItem = new Keg("zzz", "zzz", 99, 99);
        for(var item of clonedList){
          console.log("Inner Loop");
          if (item.name.toLowerCase() < lowItem.name.toLowerCase()){
            console.log("Inner If");
            lowItem = item;
            console.log("LowItem: " + lowItem.name);

          }
        }
        sortedList.push(lowItem);
        var kegIndex = clonedList.indexOf(lowItem);
        clonedList.splice(kegIndex, 1);
        console.log("End Loop");
      }
      console.log("Before: " + this.kegList[0].name);
      this.kegList = sortedList;
      console.log("After: " + this.kegList[0].name);
    }
  }
}
