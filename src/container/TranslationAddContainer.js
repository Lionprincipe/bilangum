import { connect } from 'react-redux'
import TranslationAdd from '../components/TranslationAdd'
import { saveNewTranslation } from '../actions'
import { translationAddSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  ...translationAddSelector(state, ownProps),
  name: 'translation',
})
const mapDispatchToProps = (dispatch, { wordId }) => ({
  onSave: (newWord, list) =>
    saveNewTranslation(newWord, list, wordId, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslationAdd)
