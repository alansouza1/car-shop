export interface IVehicle {
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
}

export interface ICar extends IVehicle {
  _id?: string;
  doorsQty: number;
  seatsQty: number;
}
