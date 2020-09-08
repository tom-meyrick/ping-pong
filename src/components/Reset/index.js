import { connect } from "react-redux";
import Reset from "./Reset";

const mapStateToProps = ({ reset }) => ({
  reset,
});

export default connect(mapStateToProps)(Reset);
