import { connect } from 'react-redux'
import AddWord from '../components/AddWord'
import { addWord } from '../actions'

const mapStateToProps = state => ({
  newWordProps: state.newWordProps,
})
const mapDispatchToProps = dispatch => ({
  onSave: newWord => dispatch(addWord({ newWord })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWord)
