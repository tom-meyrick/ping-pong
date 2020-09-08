import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";

const mapStateToProps = ({ player2, winner, serving }) => ({
  score: player2,
  winner: winner,
  serving: serving,
  playerName: "Player 2",
  playerID: 2,
});

export default connect(mapStateToProps)(ScoreCard);
