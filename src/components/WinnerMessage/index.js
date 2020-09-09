import { connect } from "react-redux";
import WinnerMessage from "./WinnerMessage";

const mapStateToProps = ({ winner, p1Name, p2Name }) => ({
  winner,
  p1Name,
  p2Name,
});

export default connect(mapStateToProps)(WinnerMessage);
