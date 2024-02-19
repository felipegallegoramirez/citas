export class User {
  _id?: string;
  email: string;
  name: string;
  rol: string;
  bloq: Array<{
    day:Array<Number>
  }>;
  services:Array<string>;
  booking:Array<string>;


  constructor(
    _id :string = "",
    email: string = "",
    name: string = "",
    rol: string = "",
    bloq:Array<{
      day:Array<Number>
    }> =[],
    services: Array<string> = [],
    booking: Array<string> = [],
  ) {
    this._id = _id;
    this.email = email;
    this.name = name;
    this.rol = rol;
    this.bloq = bloq;
    this.services = services;
    this.booking = booking;
  }
}