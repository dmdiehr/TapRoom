export class Keg {
  public tapped: boolean = false;
  public volume: number = 12;
  public id: number = Date.now();
  constructor(public name: string, public brand: string, public price: number, public abv: number) {

  }
}
