(() => {

  const numbers: (string | number)[] = [1,2,3,4,5,'6',7,8,9,10]
  numbers.push(11)
  console.log(numbers)

  const villan: string[] = ['Omega Rojo', 'Dormamu', 'Duende verde'];
  villan.forEach( v => console.log(v.toUpperCase()))

}) ()