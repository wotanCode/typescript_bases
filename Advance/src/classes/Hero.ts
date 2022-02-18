import powers from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
  ){}
    get power():string{
      console.log("buscando id...")
      return powers.find(power=> power.id === this.powerId)?.desc || 'not found';
    }
}


export class Hero2 {}
export class Hero3 {}

export const PI = 3.14;
export const miNombre= "Pedrito";