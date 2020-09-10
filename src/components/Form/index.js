import { connect } from "react-redux";
import Form from "./Form";
import { handlePost } from "../../data/actions/api";

const mapStateToProps = (state) => {
  return {
    player_1: state.player_1,
    player_2: state.player_2,
    winning_score: state.winning_score,
    change_serve: state.change_serve,
    submitted: state.submitted,
    gameID: state.gameID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (data) => dispatch(handlePost(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
