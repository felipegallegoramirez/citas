export class User {
  _id?: string;
  email: string;
  name: string;
  rol: string;
  profresion:string;
  bloq: Array<{
    day:Array<number>
  }>;
  services:Array<string>;
  booking:Array<string>;


  constructor(
    _id :string = "",
    email: string = "",
    name: string = "",
    rol: string = "",
    profresion: string = "",
    bloq:Array<{
      day:Array<number>
    }> =[],
    services: Array<string> = [],
    booking: Array<string> = [],
  ) {
    this._id = _id;
    this.email = email;
    this.name = name;
    this.rol = rol;
    this.profresion = profresion;
    this.bloq = bloq;
    this.services = services;
    this.booking = booking;
  }
}