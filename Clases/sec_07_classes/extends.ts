(()=>{

  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ){
      console.log('Constructor Avenger llamado!')
    }
    //solo funciona desde la clase o las que extiendan de la misma
      protected getFullName(){
        return `${this.name} ${this.realName}`
      }
  }

  class Xmen extends Avenger{
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ){
      super(name, realName)
      console.log('Constructor xmen llamado')
    }

    getFullNameDesdeXmen(){
      console.log(super.getFullName())
    }

  }

  const wolverine = new Xmen('wolverine', 'logan', true)

  console.log(wolverine);
  wolverine.getFullNameDesdeXmen();

})()
