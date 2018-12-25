import { connect } from 'react-redux'
import BtnTray from '../components/BtnTray'
import { composeBtnsList } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  btnList: composeBtnsList(state, ownProps),
})

export default connect(mapStateToProps)(BtnTray)
