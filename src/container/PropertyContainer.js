import { connect } from 'react-redux'
import Property from '../components/Property'
import { toggleEditMode } from '../actions'
import { getWordElEditStatus } from '../selectors'

const mapPropsToState = (state, ownProps) => ({
  isEditing: getWordElEditStatus(ownProps, state),
})

const mapDispatchToProps = (dispatch, { wordId, name }) => ({
  toggleEdit: () => dispatch(toggleEditMode({ wordId, name })),
})

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Property)
