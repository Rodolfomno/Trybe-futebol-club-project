import MatchModel from '../database/models/MatchModel';
import TeamModel from '../database/models/TeamModel';
import IMatch from '../interfaces/IMatch';

export default class MatchService {
  public static async getAll() {
    const allMatches = await MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return allMatches;
  }

  public static async getAllByProgress(progress: number) {
    const AllByProgress = await MatchModel.findAll({
      where: { inProgress: progress },
      include: [
        { model: TeamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return AllByProgress;
  }

  public static async createMatch(newMatch: IMatch) {
    const teamHomeId = await TeamModel.findOne({ where: { id: newMatch.homeTeam } });
    const teamAwayId = await TeamModel.findOne({ where: { id: newMatch.awayTeam } });

    if (!teamAwayId || !teamHomeId) return false;

    const match = await MatchModel.create({
      homeTeam: newMatch.homeTeam,
      awayTeam: newMatch.awayTeam,
      homeTeamGoals: newMatch.homeTeamGoals,
      awayTeamGoals: newMatch.awayTeamGoals,
      inProgress: true,
    });

    return match;
  }
}
