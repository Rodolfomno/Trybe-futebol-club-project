import TeamResults from '../util/teamResults';
import TeamModel from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';

export default class LeaderBoardService {
  public static async getHomePoints() {
    const teams = await TeamModel.findAll();
    const matches = await MatchModel.findAll();
    const results: TeamResults[] = [];

    teams.forEach((Team) => {
      const TM = matches.filter((Match) => ((Match.homeTeam === Team.id) && (!Match.inProgress)))
        .map((Match) => ({
          goalsFavor: Match.homeTeamGoals,
          goalsOwn: Match.awayTeamGoals,
        }));
      results.push(new TeamResults({ teamName: Team.teamName, matches: TM }));
    });

    return TeamResults.orderedBoard(results);
  }

  public static async getAwayPoints() {
    const teams = await TeamModel.findAll();
    const matches = await MatchModel.findAll();
    const results: TeamResults[] = [];

    teams.forEach((Team) => {
      const TM = matches.filter((Match) => ((Match.awayTeam === Team.id) && (!Match.inProgress)))
        .map((Match) => ({
          goalsFavor: Match.awayTeamGoals,
          goalsOwn: Match.homeTeamGoals,
        }));
      results.push(new TeamResults({ teamName: Team.teamName, matches: TM }));
    });

    return TeamResults.orderedBoard(results);
  }

  public static async getAllTeamsResults() {
    const teams = await TeamModel.findAll();
    const matches = await MatchModel.findAll();
    const results:TeamResults[] = [];

    teams.forEach((Team) => {
      const HM = matches.filter((Match) => ((Match.homeTeam === Team.id) && (!Match.inProgress)))
        .map((Match) => ({
          goalsFavor: Match.homeTeamGoals,
          goalsOwn: Match.awayTeamGoals,
        }));
      const AT = matches.filter((Match) => ((Match.awayTeam === Team.id) && (!Match.inProgress)))
        .map((Match) => ({
          goalsFavor: Match.awayTeamGoals,
          goalsOwn: Match.homeTeamGoals,
        }));

      const allResults = new TeamResults({ teamName: Team.teamName, matches: [...HM, ...AT] });
      results.push(allResults);
    });

    return TeamResults.orderedBoard(results);
  }
}
