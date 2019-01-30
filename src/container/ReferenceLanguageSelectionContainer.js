import { connect } from 'react-redux'
import { setReferenceLanguage } from '../actions'
import ReferenceLanguageSelection from '../components/ReferenceLanguageSelection'

const mapStateToProps = state => ({
  name: 'referenceLanguage',
  referenceLanguagesList: ['french', 'english', 'deutsch'],
  referenceLanguage: state.referenceLanguage,
})
const mapDispatchToProps = (dispatch) => ({
  onChange: referenceLanguage =>
    dispatch(setReferenceLanguage({ referenceLanguage })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferenceLanguageSelection)
