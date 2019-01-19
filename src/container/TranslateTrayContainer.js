import { connect } from 'react-redux'
import AddProperty from '../components/TranslateTray'
import { updateTranslation } from '../actions'

const mapDispatchToProps = (dispatch, { wordId }) => ({
  onSave: list => updateTranslation(wordId, list, dispatch),
})

export default connect(
  null,
  mapDispatchToProps
)(AddProperty)
