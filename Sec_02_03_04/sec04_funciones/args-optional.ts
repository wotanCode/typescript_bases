(()=>{

  const fullName = ( firstName: string, lastName?:string ): string => {
    return `${ firstName } ${ lastName || 'No lastname error' }`;
  }

  const name = fullName('Tony');

  console.log({ name })

})()