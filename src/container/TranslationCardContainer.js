import { connect } from 'react-redux'
import TranslationCard from '../components/WORDS/TRANSLATIONS/TranslationCard'
import { updateTranslation } from '../actions'
import { translationListSelector } from '../selectors'

const mapPropsToState = (state, ownProps) => ({
  translationWordList: translationListSelector(state, ownProps),
})

const mapDispatchToProps = (dispatch, { wordIndex }) => ({
  onSave: list => updateTranslation(wordIndex, list, dispatch),
})

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(TranslationCard)
