import { connect } from 'react-redux'
import WordsList from '../components/WORDS/WordsList'
import { wordsLanguageSelector } from '../selectors'
const mapStateToProps = state => ({
  words: wordsLanguageSelector(state),
})

export default connect(mapStateToProps)(WordsList)
