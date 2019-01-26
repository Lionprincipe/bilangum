import { connect } from 'react-redux'
import Autocomplete from '../components/Autocomplete'
import { suggestionsSelector } from '../selectors'

const mapStateToProps = state => ({
  suggestions: suggestionsSelector(state),
})
export default connect(mapStateToProps)(Autocomplete)
