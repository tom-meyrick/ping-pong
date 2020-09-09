import { connect } from "react-redux";
import LanguageToggle from "./LanguageToggle";

const mapStateToProps = ({ esperanto }) => ({
  esperanto,
});

export default connect(mapStateToProps)(LanguageToggle);
