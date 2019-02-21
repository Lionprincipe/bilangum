import { connect } from 'react-redux'
import HomeScreen from '../screens/HomeScreen'
import { hasPreferedLanguageSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  hasPreferedLanguages: hasPreferedLanguageSelector(state),
})

export default connect(mapStateToProps)(HomeScreen)
