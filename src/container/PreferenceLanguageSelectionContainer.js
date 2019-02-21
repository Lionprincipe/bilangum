import { connect } from 'react-redux'
import { setReferenceLanguage } from '../actions'
import ReferenceLanguageSelection from '../components/LANGUAGES/ReferenceLanguageSelection'

const mapStateToProps = ({
  referenceLanguage: { languageId },
  referenceLanguages,
}) => ({
  name: 'referenceLanguage',
  referenceLanguages,
  currReferenceLanguageId: languageId,
})
const mapDispatchToProps = dispatch => ({
  onChange: referenceLanguage =>
    dispatch(setReferenceLanguage({ referenceLanguage })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferenceLanguageSelection)
