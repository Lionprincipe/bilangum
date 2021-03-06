import { connect } from 'react-redux'
import TranslationView from '../components/WORDS/TRANSLATIONS/TranslationView'
import { wordIndexFromWordIdSelector } from '../selectors'

const mapPropsToState = (state, ownProps) => ({
  wordIndex: wordIndexFromWordIdSelector(state, ownProps),
})

export default connect(mapPropsToState)(TranslationView)
