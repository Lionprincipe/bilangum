import { connect } from 'react-redux'
import WordCard from '../components/WordCard'
import { getWordElOpenStatus } from '../selectors'

const mapPropsToState = (state, ownProps) => ({
  isOpen: getWordElOpenStatus(ownProps, state),
})

export default connect(mapPropsToState)(WordCard)
