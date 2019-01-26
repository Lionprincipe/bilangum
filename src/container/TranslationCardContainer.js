import { connect } from 'react-redux'
import TranslationCard from '../components/TranslationCard'
import { updateTranslation } from '../actions'

const mapDispatchToProps = (dispatch, { wordIndex }) => ({
  onSave: list => updateTranslation(wordIndex, list, dispatch),
})

export default connect(
  null,
  mapDispatchToProps
)(TranslationCard)
