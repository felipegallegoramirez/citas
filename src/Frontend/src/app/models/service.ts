export class User {
  _id?: string;
  name: string;
  time: Number;

  constructor(
    _id :string = "",
    name: string = "",
    time: number = 0,
  ) {
    this._id = _id;
    this.name = name;
    this.time = time;
  }
}