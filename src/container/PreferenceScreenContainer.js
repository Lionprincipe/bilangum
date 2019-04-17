import { connect } from 'react-redux'
import PreferencesScreen from '../screens/PreferencesScreen'
import { resetToInitialState, resetPreferences } from '../actions'

const mapDispatchToProps = dispatch => ({
  resetPreferences: () => resetPreferences(dispatch),
  resetAllData: () => dispatch(resetToInitialState()),
})

export default connect(
  null,
  mapDispatchToProps
)(PreferencesScreen)
