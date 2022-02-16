(()=>{
 
  const avengers = {
    nick: "Samuel L Jackson",
    ironman: "Robert Downey",
    vision: "pual bettany",
    activo: true,
    poder: 1500.123123,
  };

type AvengerT = {
  nick: string;
  ironman: string;
  vision: string;
  activo: boolean;
  poder: number;
}

  // const { poder, vision } = avengers
  // console.log(poder.toFixed(2), vision.toUpperCase())

  const printAvenger = ( {ironman, vision, nick, ...resto}: AvengerT ) => {
    console.log(vision, resto)
  };

  printAvenger( avengers );

})()