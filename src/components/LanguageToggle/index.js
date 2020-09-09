import { connect } from "react-redux";
import LanguageToggle from "./LanguageToggle";

const mapStateToProps = ({ esperanto }) => ({
  esperanto,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: "ESPERANTO" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);
