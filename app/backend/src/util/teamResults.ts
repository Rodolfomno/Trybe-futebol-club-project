interface IMatch {
  goalsOwn: number;
  goalsFavor: number;
}

interface IInputs {
  teamName: string;
  matches: IMatch[];
}

interface IGoals {
  matches: IMatch[];
  type: 'favor' | 'own';
}

interface IResult {
  matches: IMatch[];
  type: 'victories' | 'draws' | 'losses';
}

export default class TeamResult {
  public name: string;

  public totalPoints: number;

  public totalGames: number;

  public totalVictories: number;

  public totalDraws: number;

  public totalLosses: number;

  public goalsFavor: number;

  public goalsOwn: number;

  public goalsBalance: number;

  public efficiency: number;

  constructor({ teamName, matches }: IInputs) {
    this.name = teamName;
    this.totalPoints = TeamResult.calculateTotalPoints(matches);
    this.totalGames = matches.length;
    this.totalVictories = TeamResult.calculateMatches({ matches, type: 'victories' });
    this.totalDraws = TeamResult.calculateMatches({ matches, type: 'draws' });
    this.totalLosses = TeamResult.calculateMatches({ matches, type: 'losses' });
    this.goalsFavor = TeamResult.calculateGoals({ matches, type: 'favor' });
    this.goalsOwn = TeamResult.calculateGoals({ matches, type: 'own' });
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = TeamResult.calculateEfficiency(this.totalGames, this.totalPoints);
  }

  private static calculateEfficiency(games: number, points: number) {
    return Number(((100 * points) / (games * 3)).toPrecision(4));
  }

  private static calculateTotalPoints(matches: IMatch[]) {
    const initialValue = 0;
    const points = matches.reduce((totalPoints, { goalsFavor, goalsOwn }) => {
      if (goalsFavor > goalsOwn) {
        return totalPoints + 3;
      } if (goalsFavor === goalsOwn) {
        return totalPoints + 1;
      }
      return totalPoints;
    }, initialValue);
    return points;
  }

  private static calculateMatches({ matches, type }: IResult) {
    const initialValue = 0;
    const calculatedMatches = matches.reduce((totalMatches, { goalsFavor, goalsOwn }) => {
      if ((goalsFavor > goalsOwn) && (type === 'victories')) return totalMatches + 1;
      if ((goalsFavor === goalsOwn) && (type === 'draws')) return totalMatches + 1;
      if ((goalsFavor < goalsOwn) && (type === 'losses')) return totalMatches + 1;
      return totalMatches;
    }, initialValue);

    return calculatedMatches;
  }

  private static calculateGoals({ matches, type }: IGoals) {
    const initialValue = 0;
    const goals = matches.reduce((totalGoals, { goalsFavor, goalsOwn }) => {
      if (type === 'favor') return totalGoals + goalsFavor;
      if (type === 'own') return totalGoals + goalsOwn;
      return totalGoals;
    }, initialValue);
    return goals;
  }
}
