import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";
import { incrementP1 } from "../../data/actions";

const mapStateToProps = ({ player1, winner, serving, p1Name }) => ({
  score: player1,
  winner: winner,
  serving: serving,
  playerName: p1Name,
  playerID: 1,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch(incrementP1()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
