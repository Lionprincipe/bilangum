import { connect } from 'react-redux'
import BtnTray from '../components/BtnTray'
import { btnSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  btnList: btnSelector(state, ownProps),
})

export default connect(mapStateToProps)(BtnTray)
