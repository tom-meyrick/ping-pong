import { connect } from "react-redux";
import Form from "./Form";
import { submit } from "../../data/actions";

const mapStateToProps = (state) => {
  return {
    p1Name: state.p1Name,
    p2Name: state.p2Name,
    win: state.win,
    alternate: state.alternate,
    submitted: state.submitted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (data) => dispatch(submit(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
