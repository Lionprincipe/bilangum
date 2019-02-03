import { connect } from 'react-redux'
import WordCard from '../components/WordCard'
import { selectWordCardProps } from '../selectors'

const mapPropsToState = (state, ownProps) => ({
  ...selectWordCardProps(state, ownProps),
})

export default connect(mapPropsToState)(WordCard)
