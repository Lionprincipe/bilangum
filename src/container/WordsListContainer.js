import { connect } from 'react-redux'
import WordsList from '../components/WordsList'

const mapStateToProps = state => ({
  words: state.words,
})

export default connect(mapStateToProps)(WordsList)
