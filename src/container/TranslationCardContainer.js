import { connect } from 'react-redux'
import TranslationCard from '../components/TranslationCard'
import { updateTranslation } from '../actions'

const mapDispatchToProps = (dispatch, { wordId }) => ({
  onSave: list => updateTranslation(wordId, list, dispatch),
})

export default connect(
  null,
  mapDispatchToProps
)(TranslationCard)
