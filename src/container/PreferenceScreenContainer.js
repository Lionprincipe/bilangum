import { connect } from "react-redux";
import PreferencesScreen from "../screens/PreferencesScreen";
import { resetSaveState, resetPreferences } from "../actions";

const mapDispatchToProps = dispatch => ({
  resetPreferences: () => resetPreferences(dispatch),
  resetAllData: () => resetSaveState(dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(PreferencesScreen);
