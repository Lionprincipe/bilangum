import { connect } from 'react-redux'
import Svg from '../components/UI/Svg'
import { svgPathSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  path: svgPathSelector(state, ownProps),
})

export default connect(mapStateToProps)(Svg)
