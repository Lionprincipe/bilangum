import { connect } from 'react-redux'
import WordCardHeader from '../components/WORDS/WordCardHeader'
import { wordUpdate, deleteWord } from '../actions'

const mapPropsToState = (state, ownProps) => ({
  name: 'word',
})

const mapDispatchToProps = (dispatch, { wordIndex, name, toggleEdit }) => ({
  onDelete: () => dispatch(deleteWord({ wordIndex })),
  onSubmit: (name, value) => {
    dispatch(wordUpdate({ wordIndex, name, value }))
    toggleEdit()
  },
})

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(WordCardHeader)
