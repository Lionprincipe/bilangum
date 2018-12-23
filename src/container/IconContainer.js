import { connect } from 'react-redux'
import Icon from '../components/Icon'
import { iconAttributsSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  ...iconAttributsSelector(state, ownProps),
})

export default connect(mapStateToProps)(Icon)
