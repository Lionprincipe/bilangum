import { connect } from 'react-redux'
import LanguageBox from '../components/LANGUAGES/LanguageBox'
import { setSeachLanguage } from '../actions'

const mapStateToProps = (
  { referenceLanguage, ethnicLanguage, searchLanguage },
  ownProps
) => ({
  languages: [referenceLanguage, ethnicLanguage],
})
const mapDispatchToProps = dispatch => ({
  onChange: searchLanguage => dispatch(setSeachLanguage({ searchLanguage })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageBox)
