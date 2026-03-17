export type IVehicle = {
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
}

export type ICar = IVehicle & {
  _id?: string;
  doorsQty: number;
  seatsQty: number;
}
