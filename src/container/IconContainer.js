import { connect } from 'react-redux'
import Icon from '../components/Icon'
import { btnAttributSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  ...btnAttributSelector(state, ownProps),
})

export default connect(mapStateToProps)(Icon)
