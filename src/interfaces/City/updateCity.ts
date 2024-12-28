export default interface IUpdateCity {
  id: number;
  name?: string;
  zipcode?: string;
  updatedBy: number;
  coworks?: number[];
}
