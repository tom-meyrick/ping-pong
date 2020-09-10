import { connect } from "react-redux";
import Reset from "./Reset";
import { reset } from "../../data/actions";

const mapStateToProps = ({ reset, submitted }) => ({
  reset,
  submitted,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
