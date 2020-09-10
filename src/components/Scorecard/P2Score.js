import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";
import { handlePatchP2 } from "../../data/actions/api";

const mapStateToProps = ({ player2, winner, serving, player_2, gameID }) => ({
  score: player2,
  winner: winner,
  serving: serving,
  playerName: player_2,
  playerID: 2,
  gameID,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: (gameID) => dispatch(handlePatchP2(gameID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
