import { connect } from 'react-redux'
import EthnicLanguageSelection from '../components/EthnicLanguageSelection'
import { setEthnicLanguage } from '../actions'
const mapStateToProps = state => ({
  ethnicLanguage: state.ethnicLanguage,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: ethnicLanguage => dispatch(setEthnicLanguage({ ethnicLanguage })),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EthnicLanguageSelection)
