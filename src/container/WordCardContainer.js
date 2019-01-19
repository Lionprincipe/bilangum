import { connect } from 'react-redux'
import WordCard from '../components/WordCard'
import { getWordElOpenStatus, selectCurrentWord } from '../selectors'

const mapPropsToState = (state, ownProps) => ({
  word: selectCurrentWord(state, ownProps),
  isOpen: getWordElOpenStatus(ownProps, state),
})

export default connect(mapPropsToState)(WordCard)
