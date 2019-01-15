import { connect } from 'react-redux'
import AddWord from '../components/AddWord'
import { addWord, toggleIsAdding } from '../actions'

const mapStateToProps = state => ({
  newWordProps: state.newWordProps,
  isAdding: state.isAdding,
})
const mapDispatchToProps = dispatch => ({
  onSave: newWord => dispatch(addWord({ newWord })),
  toggleOpen: () => dispatch(toggleIsAdding()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWord)
