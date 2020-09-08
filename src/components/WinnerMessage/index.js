import { connect } from "react-redux";
import WinnerMessage from "./WinnerMessage";

const mapStateToProps = ({ winner }) => ({
  winner,
});

export default connect(mapStateToProps)(WinnerMessage);
