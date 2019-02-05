import { connect } from 'react-redux'
import AddWord from '../components/WORDS/AddWord'
import { toggleIsAdding, createWord } from '../actions'

const mapStateToProps = state => ({
  newWordProps: state.newWordProps,
  isAdding: state.isAdding,
})

const mapDispatchToProps = dispatch => ({
  onSave: newWord => createWord(newWord, dispatch),
  toggleOpen: () => dispatch(toggleIsAdding()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWord)
