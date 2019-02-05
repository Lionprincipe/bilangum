import { connect } from 'react-redux'
import Icon from '../components/UI/Icon'
import { iconAttributsSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  ...iconAttributsSelector(state, ownProps),
})

export default connect(mapStateToProps)(Icon)
