import { connect } from 'react-redux'
import Modal from '../components/Modal'
import { modalIdSelector } from '../selectors'

const mapStateToProps = state => ({
  index: modalIdSelector(state),
})
export default connect(mapStateToProps)(Modal)
