import IMatch from './IMatch2';

export default interface IGoals {
  matches: IMatch[];
  type: 'favor' | 'own';
}
