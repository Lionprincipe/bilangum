import { connect } from 'react-redux'
import BtnTray from '../components/BtnTray'
import { btnSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  btnList: btnSelector(state.btns, ownProps.btnList),
})

export default connect(mapStateToProps)(BtnTray)
