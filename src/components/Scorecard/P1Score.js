import { connect } from "react-redux";
import ScoreCard from "./ScoreCard";
import { handlePatchP1 } from "../../data/actions/api";

const mapStateToProps = ({ player1, winner, serving, player_1, gameID }) => ({
  score: player1,
  winner: winner,
  serving: serving,
  playerName: player_1,
  playerID: 1,
  gameID,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: (gameID) => {
      console.log(gameID);
      dispatch(handlePatchP1(gameID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
