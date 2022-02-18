(()=>{

  let flash: { name:string, age?:number, powers:string[] } = {
    name: 'Barry Alen',
    age: 24,
    powers: ['Super velocidad','Viajar en el tiempo']
  }

  console.log(flash);

  flash = {
    name: 'Clark',
    // age: 24,
    powers: ['Super velocidad','Viajar en el tiempo']
    // getNombre(){
    //   return this.name
    // }
  }

})()