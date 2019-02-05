import { connect } from 'react-redux'
import ToggleSearchLanguage from '../components/LANGUAGES/ToggleSearchLanguage'
import { setSeachLanguage } from '../actions'
import { languageCheckedSelector } from '../selectors'
const mapStateToProps = ({
  referenceLanguage,
  ethnicLanguage,
  searchLanguage,
  referenceLanguage: { language: reference },
  ethnicLanguage: { language: ethnic },
}) => ({
  referenceLanguage,
  ethnicLanguage,
  searchLanguage,
  ethnic: ethnic || '',
  reference: reference || '',
  name: 'searchLanguage',
  ethnicChecked: !!languageCheckedSelector(ethnicLanguage, searchLanguage),
  referenceChecked: !!languageCheckedSelector(
    referenceLanguage,
    searchLanguage
  ),
})
const mapDispatchToState = dispatch => ({
  onChange: searchLanguage => dispatch(setSeachLanguage({ searchLanguage })),
})

export default connect(
  mapStateToProps,
  mapDispatchToState
)(ToggleSearchLanguage)
