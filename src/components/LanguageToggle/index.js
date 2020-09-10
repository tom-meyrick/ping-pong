import { connect } from "react-redux";
import LanguageToggle from "./LanguageToggle";
import { esperanto } from "../../data/actions/state";

const mapStateToProps = ({ esperanto }) => ({
  esperanto,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(esperanto()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);
