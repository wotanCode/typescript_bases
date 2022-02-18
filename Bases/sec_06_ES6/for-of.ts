(()=>{
 
  type AvengerT = {
    name:string;
    weapon: string;
  }

  const ironman: AvengerT = {
    name: "Ironman",
    weapon: "ArmorSuit"
  }
  const captainAmerica: AvengerT = {
    name: "Capitan America",
    weapon: "Escudo"
  }
  const thor: AvengerT = {
    name: "Thor Odinson",
    weapon: "Mjolnir"
  }

  const avengers:AvengerT[] = [ironman, thor, captainAmerica]

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon)
  }
  
})()