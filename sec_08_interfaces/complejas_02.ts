(()=>{

  interface ClientI {
    name: string;
    age?: number;
    address: AddressI;
    getFullAddress(id: string):string;
  }

  interface AddressI{
    id: number;
    zip: string,
    city: string,
  }

  const client1: ClientI = {
    name: 'Pedro',
    age: 25,
    address:{
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottwa',
    },
    getFullAddress(id: string){
      return this.address.city;
    },
  }

  const client2: ClientI = {
    name: 'Melissa',
    age: 30,
    address:{
      id: 125,
      zip: 'KY2 SUD1',
      city: 'Ottwa',
    },
    getFullAddress(id: string){
      return this.address.city;
    },
  }

})()