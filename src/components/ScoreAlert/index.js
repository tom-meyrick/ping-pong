import { connect } from "react-redux";
import ScoreAlert from "./ScoreAlert";

const mapStateToProps = ({ win }) => {
  return {
    win,
  };
};

export default connect(mapStateToProps)(ScoreAlert);
