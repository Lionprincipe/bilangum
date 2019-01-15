import { connect } from 'react-redux'
import { selectAddPropertyNumber } from '../selectors'
import WordCardBody from '../components/WordCardBody'

const mapPropsToState = (state, ownProps) => ({
  addPropsNumber: selectAddPropertyNumber(state, ownProps),
})

export default connect(mapPropsToState)(WordCardBody)
