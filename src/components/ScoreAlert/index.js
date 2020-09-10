import { connect } from "react-redux";
import ScoreAlert from "./ScoreAlert";

const mapStateToProps = ({ winning_score }) => {
  return {
    winning_score,
  };
};

export default connect(mapStateToProps)(ScoreAlert);
