(()=>{

  const error = (message:string):never =>{
    throw new Error(message)
  }

  error("auxilio!");

  console.log("hola mundo")

})()