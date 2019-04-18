import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import unknownPlayerPicture from '../asset/NFL-1.jpg'

class Players extends Component {
  state = {
    players: []
  }

  pictures = {
    2593: require('../asset/ARodgers.jpg'),
    18055: require('../asset/DPrescott.jpg'),
    14536: require('../asset/RWilson.jpeg'),
    4314: require('../asset/TBrady.jpg'),
    14967: require('../asset/LBell.jpg'),
    16847: require('../asset/DJohnson.jpg'),
    732: require('../asset/MRyan.jpg'),
    16763: require('../asset/MMariota.jpg'),
    13320: require('../asset/CNewton.jpg'),
    16311: require('../asset/DCarr.jpg'),
    17923: require('../asset/Zeke-2.jpg'),
    7242: require('../asset/DBrees.jpg'),
    14252: require('../asset/KCousins.jpg'),
    3807: require('../asset/B-Roethlisberger.jpg'),
    11527: require('../asset/SBradford.jpg'),
    12831: require('../asset/TTaylor.jpg'),
    2438: require('../asset/CPalmer.jpeg')
  }

  getPlayersFromApi(props) {
    const year = props.match.params.year

    console.log('we are looking for year', year)

    axios
      .get(
        `https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByWeek/${year}/1`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': '2987cef5b79b4b9a9937ed9d5c25f70f'
          }
        }
      )
      .then(response => {
        this.setState({
          players: response.data
        })
      })
  }

  componentDidMount() {
    this.getPlayersFromApi(this.props)
  }

  componentWillReceiveProps(newProps) {
    this.getPlayersFromApi(newProps)
  }

  // statsForPlayer(playerName) {
  //   return this.state.apiData.find(api => {
  //     return api.Name && api.Name.localeCompare(playerName) === 0
  //   })
  // }

  render() {
    return (
      <section className="players">
        {this.state.players.map((player, index) => {
          const stats = player

          // Activated: 1
          // AssistedTackles: 0
          // BlockedKickReturnTouchdowns: 0
          // BlockedKickReturnYards: 0
          // BlockedKicks: 0
          // DateTime: "2018-09-09T20:20:00"
          // Day: "2018-09-09T00:00:00"
          // DeclaredInactive: false
          // DefensiveSnapsPlayed: null
          // DefensiveTeamSnaps: null
          // DefensiveTouchdowns: 0
          // DraftKingsPosition: "Scrambled"
          // DraftKingsSalary: 8452
          // ExtraPointsAttempted: 0
          // ExtraPointsHadBlocked: 0
          // ExtraPointsMade: 0
          // FanDuelPosition: "Scrambled"
          // FanDuelSalary: 9804
          // FantasyDataSalary: 8452
          // FantasyDraftPosition: "QB"
          // FantasyDraftSalary: 14763
          // FantasyPoints: 22.6
          // FantasyPointsDraftKings: 23.5
          // FantasyPointsFanDuel: 23.3
          // FantasyPointsFantasyDraft: 23.5
          // FantasyPointsPPR: 22.6
          // FantasyPointsYahoo: 23.3
          // FantasyPosition: "QB"
          // FieldGoalPercentage: 0
          // FieldGoalReturnTouchdowns: 0
          // FieldGoalReturnYards: 0
          // FieldGoalsAttempted: 0
          // FieldGoalsHadBlocked: 0
          // FieldGoalsLongestMade: 0
          // FieldGoalsMade: 0
          // FieldGoalsMade0to19: 0
          // FieldGoalsMade20to29: 0
          // FieldGoalsMade30to39: 0
          // FieldGoalsMade40to49: 0
          // FieldGoalsMade50Plus: 0
          // FumbleReturnTouchdowns: 0
          // FumbleReturnYards: 0
          // Fumbles: 0.2
          // FumblesForced: 0
          // FumblesLost: 0.2
          // FumblesOutOfBounds: 0
          // FumblesOwnRecoveries: 0
          // FumblesRecovered: 0
          // GameDate: "2018-09-09T20:20:00"
          // GameKey: "201810112"
          // GlobalGameID: 16667
          // GlobalOpponentID: 6
          // GlobalTeamID: 12
          // HomeOrAway: "HOME"
          // Humidity: null
          // InjuryBodyPart: "Scrambled"
          // InjuryNotes: "Scrambled"
          // InjuryPractice: "Scrambled"
          // InjuryPracticeDescription: "Scrambled"
          // InjuryStartDate: "2018-09-10T00:00:00"
          // InjuryStatus: "Scrambled"
          // InterceptionReturnTouchdowns: 0
          // InterceptionReturnYards: 0
          // Interceptions: 0
          // IsGameOver: true
          // KickReturnFairCatches: 0
          // KickReturnLong: 0
          // KickReturnTouchdowns: 0
          // KickReturnYards: 0
          // KickReturnYardsPerAttempt: 0
          // KickReturns: 0
          // MiscAssistedTackles: 0
          // MiscFumblesForced: 0
          // MiscFumblesRecovered: 0
          // MiscSoloTackles: 0
          // Name: "Aaron Rodgers"
          // Number: 12
          // OffensiveSnapsPlayed: null
          // OffensiveTeamSnaps: null
          // OffensiveTouchdowns: 0
          // Opponent: "CHI"
          // OpponentID: 6
          // OpponentPositionRank: 7
          // OpponentRank: 7
          // PassesDefended: 0
          // PassingAttempts: 40.3
          // PassingCompletionPercentage: 72
          // PassingCompletions: 25.9
          // PassingInterceptions: 0.7
          // PassingLong: 0
          // PassingRating: 103.8
          // PassingSackYards: 0
          // PassingSacks: 0
          // PassingTouchdowns: 2.5
          // PassingYards: 291.1
          // PassingYardsPerAttempt: 8.1
          // PassingYardsPerCompletion: 12.6
          // Played: 1
          // PlayerGameID: 990095579
          // PlayerID: 2593
          // PlayingSurface: "Grass"
          // Position: "QB"
          // PositionCategory: "OFF"
          // PuntAverage: 0
          // PuntInside20: 0
          // PuntLong: 0
          // PuntNetAverage: 0
          // PuntNetYards: 0
          // PuntReturnFairCatches: 0
          // PuntReturnLong: 0
          // PuntReturnTouchdowns: 0
          // PuntReturnYards: 0
          // PuntReturnYardsPerAttempt: 0
          // PuntReturns: 0
          // PuntTouchbacks: 0
          // PuntYards: 0
          // Punts: 0
          // PuntsHadBlocked: 0
          // QuarterbackHits: 0
          // ReceivingLong: 0
          // ReceivingTargets: 0
          // ReceivingTouchdowns: 0
          // ReceivingYards: 0
          // ReceivingYardsPerReception: 0
          // ReceivingYardsPerTarget: 0
          // ReceptionPercentage: 0
          // Receptions: 0
          // RushingAttempts: 5.4
          // RushingLong: 0
          // RushingTouchdowns: 0.1
          // RushingYards: 21.8
          // RushingYardsPerAttempt: 4.3
          // SackYards: 0
          // Sacks: 0
          // Safeties: 0
          // SafetiesAllowed: 0
          // ScoreID: 16667
          // ScoringDetails: []
          // Season: 2018
          // SeasonType: 1
          // ShortName: "Aaron Rodgers"
          // SoloTackles: 0
          // SpecialTeamsAssistedTackles: 0
          // SpecialTeamsFumblesForced: 0
          // SpecialTeamsFumblesRecovered: 0
          // SpecialTeamsSnapsPlayed: null
          // SpecialTeamsSoloTackles: 0
          // SpecialTeamsTeamSnaps: null
          // SpecialTeamsTouchdowns: 0
          // Stadium: null
          // Started: 1
          // Tackles: 0
          // TacklesForLoss: 0
          // Team: "GB"
          // TeamID: 12
          // Temperature: null
          // Touchdowns: 0
          // TwoPointConversionPasses: 0
          // TwoPointConversionReceptions: 0
          // TwoPointConversionReturns: 0
          // TwoPointConversionRuns: 0
          // VictivSalary: nulls
          // Week: 1
          // WindSpeed: null
          // YahooPosition: "Scrambled"
          // YahooSalary: 43

          const picture = this.pictures[player.PlayerID] || unknownPlayerPicture

          return (
            <div className="player" key={index}>
              <div>
                {/* <Link to="/zeke-2.jpg" className="click-button" /> */}
                {picture && (
                  <img
                    width="250"
                    src={picture}
                    alt={player.Name}
                    className="image-1"
                  />
                )}
                <h4>{player.name} Stats</h4>
              </div>

              <div className="horizontal-stats">
                <p>
                  {player.Number} {player.position} {player.Name}{' '}
                </p>
                <p>{player.PlayerID}</p>

                <p>
                  {' '}
                  Draft King Salary: $
                  {stats && (stats.DraftKingsSalary * 1000).toLocaleString()}
                </p>
                <p> Fumbles: {player.Fumbles}</p>
                <p> PuntReturns: {player.PuntReturns}</p>
                <p> Team#: {player && player.Team}</p>
                <p> Touchdowns: {player.Fumbles}</p>
                <p> QuarterbackHits: {player.QuarterbackHits}</p>
                <p> College: {player.college}</p>
                <p> RushingYards: {player.RushingYards}</p>
                <p>Season: {player.season}</p>
              </div>
            </div>
          )
        })}
      </section>
    )
  }
}

export default Players
