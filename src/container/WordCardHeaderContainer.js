import { connect } from 'react-redux'
import WordCardHeader from '../components/WordCardHeader'
import { toggleEditMode, toggleOpenWordCard, wordUpdate } from '../actions'
import { getWordElEditStatus } from '../selectors'

const mapPropsToState = (state, ownProps) => ({
  name: 'word',
  title: state.words[ownProps.wordId].word,
  isEditing: getWordElEditStatus(ownProps, state),
})

const mapDispatchToProps = (dispatch, { wordId, name }) => ({
  toggleEdit: () => dispatch(toggleEditMode({ wordId, name })),
  onClick: () => dispatch(toggleOpenWordCard({ wordId })),
  onUpdate: (name, value) =>
    dispatch(
      wordUpdate({
        wordId,
        name,
        value,
      })
    ),
})

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(WordCardHeader)
