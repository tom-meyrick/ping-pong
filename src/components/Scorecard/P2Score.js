import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";
import { incrementP2 } from "../../data/actions";

const mapStateToProps = ({ player2, winner, serving, p2Name }) => ({
  score: player2,
  winner: winner,
  serving: serving,
  playerName: p2Name,
  playerID: 2,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch(incrementP2()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
