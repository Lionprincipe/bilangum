import { connect } from 'react-redux'
import EthnicLanguageSelection from '../components/EthnicLanguageSelection'
import { saveEthnicLanguage } from '../actions'
const mapStateToProps = state => ({
  ethnicLanguage: state.ethnicLanguage,
  languages: state.languages,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: ethnicLanguage => saveEthnicLanguage(ethnicLanguage, dispatch),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EthnicLanguageSelection)
