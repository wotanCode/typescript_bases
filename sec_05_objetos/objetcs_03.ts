(()=>{

  let flash: { name:string, age?:number, powers:string[], getName?:()=>string, } = {
    name: 'Barry Alen',
    age: 24,
    powers: ['Super velocidad','Viajar en el tiempo']
  }

  console.log(flash);

  flash = {
    name: 'Clark',
    // age: 24,
    powers: ['Super velocidad','Viajar en el tiempo'],
    getName(){
      return this.name;
    }
  }

  console.log(flash.getName)

})()