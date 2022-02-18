(()=>{

  class Apocalipsis {

    static intance:Apocalipsis;

    private constructor(public name:string) {
      
    }

    static callApocalipsis(): Apocalipsis{
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis('Soy el apocalipsis');
      }
      return Apocalipsis.intance;
    }

    changeName( newName: string): void {
      this.name= newName;
    }

  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName('Xavier');

  // const apocalipsis1 = new Apocalipsis('Soy apocalipsis1');
  // const apocalipsis2 = new Apocalipsis('Soy apocalipsis2');
  // const apocalipsis3 = new Apocalipsis('Soy apocalipsis3');

  console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})()
