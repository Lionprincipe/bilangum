import { connect } from 'react-redux'
import ToggleSearchLanguage from '../components/ToggleSearchLanguage'

const mapStateToProps = state => ({
  preferedLanguages: state.preferedLanguages,
  inputName: state.inputName,
})

export default connect(mapStateToProps)(ToggleSearchLanguage)
