import { connect } from "react-redux";
import Reset from "./Reset";

const mapStateToProps = ({ reset }) => ({
  reset,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch({ type: "RESET" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
