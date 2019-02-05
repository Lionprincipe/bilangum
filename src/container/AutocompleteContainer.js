import { connect } from 'react-redux'
import Autocomplete from '../components/UI/Autocomplete'
import { suggestionsSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  suggestions: suggestionsSelector(state, ownProps),
})
export default connect(mapStateToProps)(Autocomplete)
