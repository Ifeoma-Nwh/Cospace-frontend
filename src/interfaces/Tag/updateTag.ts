export default interface IUpdateTag {
  id: number;
  name?: string;
  updatedBy: number;
  taggedCoworks?: number[];
}
