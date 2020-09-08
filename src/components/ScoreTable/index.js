import { connect } from "react-redux";
import ScoreTable from "./ScoreTable";

const mapStateToProps = ({ scores }) => ({
  scores,
});

export default connect(mapStateToProps)(ScoreTable);
