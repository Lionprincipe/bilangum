import { connect } from 'react-redux'
import EthnicLanguageSelection from '../components/LANGUAGES/EthnicLanguageSelection'
import { saveEthnicLanguage } from '../actions'
const mapStateToProps = state => ({
  ethnicLanguage: state.ethnicLanguage.language,
  languages: state.languages,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: ethnicLanguage => saveEthnicLanguage(ethnicLanguage, dispatch),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EthnicLanguageSelection)
