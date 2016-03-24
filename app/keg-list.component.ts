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
    if (this.selectedKeg === clickedKeg){
      this.selectedKeg = null;
    }
    else {
      this.selectedKeg = clickedKeg;
    }
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
  }
  onSort(sortParameter){
    var clonedList = [];
    for(var keg of this.kegList){
      clonedList.push(keg);
    }
    if(sortParameter === "sort-name"){
      var sortedList = [];
      for(var i=0; i<this.kegList.length; i++){
        var lowItem = new Keg("zzz", "zzz", 99, 99);
        for(var item of clonedList){
          if (item.name.toLowerCase() < lowItem.name.toLowerCase()){
            lowItem = item;
          }
        }
        sortedList.push(lowItem);
        var kegIndex = clonedList.indexOf(lowItem);
        clonedList.splice(kegIndex, 1);
      }
      this.kegList = sortedList;
    }

    if(sortParameter === "sort-brand"){
      var sortedList = [];
      for(var i=0; i<this.kegList.length; i++){
        var lowItem = new Keg("zzz", "zzz", 99, 99);
        for(var item of clonedList){
          if (item.brand.toLowerCase() < lowItem.brand.toLowerCase()){
            lowItem = item;
          }
        }
        sortedList.push(lowItem);
        var kegIndex = clonedList.indexOf(lowItem);
        clonedList.splice(kegIndex, 1);
      }
      this.kegList = sortedList;
    }

    if(sortParameter === "sort-price"){
      var sortedList = [];
      for(var i=0; i<this.kegList.length; i++){
        var lowItem = new Keg("zzz", "zzz", 99, 99);
        for(var item of clonedList){
          if (item.price < lowItem.price){
            lowItem = item;
          }
        }
        sortedList.push(lowItem);
        var kegIndex = clonedList.indexOf(lowItem);
        clonedList.splice(kegIndex, 1);
      }
      this.kegList = sortedList;
    }

    if(sortParameter === "sort-abv"){
      var sortedList = [];
      for(var i=0; i<this.kegList.length; i++){
        var lowItem = new Keg("zzz", "zzz", 99, 99);
        for(var item of clonedList){
          if (item.abv < lowItem.abv){
            lowItem = item;
          }
        }
        sortedList.push(lowItem);
        var kegIndex = clonedList.indexOf(lowItem);
        clonedList.splice(kegIndex, 1);
      }
      this.kegList = sortedList;
    }

    if(sortParameter === "sort-volume"){
      var sortedList = [];
      for(var i=0; i<this.kegList.length; i++){
        var lowItem = new Keg("zzz", "zzz", 99, 99);
        lowItem.volume = 999;
        for(var item of clonedList){
          if (item.volume < lowItem.volume){
            lowItem = item;
          }
        }
        sortedList.push(lowItem);
        var kegIndex = clonedList.indexOf(lowItem);
        clonedList.splice(kegIndex, 1);
      }
      this.kegList = sortedList;
    }
  }
}
