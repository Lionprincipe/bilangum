import { connect } from 'react-redux'
import TranslationAdd from '../components/TranslationAdd'
import { saveNewTranslation } from '../actions'
import { translationAddSelector, suggestionsSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  ...translationAddSelector(state, ownProps),
  name: 'translation',
})
const mapDispatchToProps = (dispatch, { wordIndex }) => ({
  onSave: (newWord, value, list) =>
    saveNewTranslation(newWord, value, list, wordIndex, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslationAdd)
