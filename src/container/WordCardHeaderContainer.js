import { connect } from 'react-redux'
import WordCardHeader from '../components/WordCardHeader'
import {
  toggleEditMode,
  toggleOpenWordCard,
  wordUpdate,
  deleteWord,
} from '../actions'
import { getWordElEditStatus } from '../selectors'

const mapPropsToState = (state, ownProps) => ({
  name: 'word',
  isEditing: getWordElEditStatus(ownProps, state),
})

const mapDispatchToProps = (dispatch, { wordIndex, name }) => ({
  toggleEdit: () => dispatch(toggleEditMode({ wordIndex, name })),
  onClick: () => dispatch(toggleOpenWordCard({ wordIndex })),
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
