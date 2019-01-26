import { connect } from 'react-redux'
import TranslationAdd from '../components/TranslationAdd'
import { saveNewTranslation } from '../actions'
import { translationAddSelector, suggestionsSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  ...translationAddSelector(state, ownProps),
  name: 'translation',
  suggestions: suggestionsSelector(state, ownProps),
})
const mapDispatchToProps = (dispatch, { wordIndex }) => ({
  onSave: (newWord, list) =>
    saveNewTranslation(newWord, list, wordIndex, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslationAdd)
