import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";

const mapStateToProps = ({ player1, winner, serving }) => ({
  score: player1,
  winner: winner,
  serving: serving,
  playerName: "Player 1",
  playerID: 1,
});

export default connect(mapStateToProps)(ScoreCard);
