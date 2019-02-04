import { connect } from 'react-redux'
import TranslationAdd from '../components/TranslationAdd'
import { saveNewTranslation } from '../actions'
import {
  translationAddSelector,
  translationsSuggestionSelector,
} from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  ...translationAddSelector(state, ownProps),
  name: 'translation',
  suggestions: translationsSuggestionSelector(state, ownProps),
})
const mapDispatchToProps = (dispatch, { wordIndex }) => ({
  onSave: (newWord, value, list) =>
    saveNewTranslation(newWord, value, list, wordIndex, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslationAdd)
