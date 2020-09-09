import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";

const mapStateToProps = ({ player2, winner, serving }) => ({
  score: player2,
  winner: winner,
  serving: serving,
  playerName: "Player 2",
  playerID: 2,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch({ type: "INCREMENTP2" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
