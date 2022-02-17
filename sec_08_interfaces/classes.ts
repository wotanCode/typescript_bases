(()=>{

  interface Xmen{
    name: string;
    realName: string;
    mutantPower(id: number): string;
  };

  interface Human{
    age: number;
  };

  class Mutant implements Xmen, Human {
    public age: number =12;
    public name: string = "pedrito";
    public realName: string = "wotan";
    mutantPower(id: number) {
      return this.name + ' ' + this.realName;
    };
  };
  
})()