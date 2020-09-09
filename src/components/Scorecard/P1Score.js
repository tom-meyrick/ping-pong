import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";

const mapStateToProps = ({ player1, winner, serving }) => ({
  score: player1,
  winner: winner,
  serving: serving,
  playerName: "Player 1",
  playerID: 1,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch({ type: "INCREMENTP1" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
