import { connect } from 'react-redux'
import WordCardHeader from '../components/WORDS/WordCardHeader'
import { toggleEditMode, wordUpdate, deleteWord } from '../actions'
import { getWordElEditStatus } from '../selectors'

const mapPropsToState = (state, ownProps) => ({
  name: 'word',
  isEditing: getWordElEditStatus(ownProps, state),
})

const mapDispatchToProps = (dispatch, { wordIndex, name }) => ({
  toggleEdit: () => dispatch(toggleEditMode({ wordIndex, name })),
  onDelete: () => dispatch(deleteWord({ wordIndex })),
  onUpdate: (name, value) =>
    dispatch(
      wordUpdate({
        wordIndex,
        name,
        value,
      })
    ),
})

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(WordCardHeader)
