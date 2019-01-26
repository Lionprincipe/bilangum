import { connect } from 'react-redux'
import Property from '../components/Property'
import { toggleEditMode, deleteWordProperty, wordUpdate } from '../actions'
import { getWordElEditStatus } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  isEditing: getWordElEditStatus(ownProps, state),
})

const mapDispatchToProps = (dispatch, { wordIndex, name }) => ({
  toggleEdit: () => dispatch(toggleEditMode({ wordIndex, name })),
  deleteMe: () => dispatch(deleteWordProperty({ wordIndex, name })),
  onSubmit: value => {
    dispatch(wordUpdate({ wordIndex, name, value }))
    dispatch(toggleEditMode({ wordIndex, name }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Property)
