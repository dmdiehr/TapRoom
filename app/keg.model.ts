export class Keg {
  public tapped: boolean = false;
  public volume: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number) {
    
  }
}
