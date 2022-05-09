import IMatch from './IMatch2';

export default interface IResult {
  matches: IMatch[];
  type: 'victories' | 'draws' | 'losses';
}
