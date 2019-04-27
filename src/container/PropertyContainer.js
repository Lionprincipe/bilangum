import { connect } from 'react-redux'
import Property from '../components/WORDS/Property'
import { deleteWordProperty, wordUpdate } from '../actions'

const mapDispatchToProps = (dispatch, { wordIndex, name, toggleEdit }) => ({
  deleteMe: () => dispatch(deleteWordProperty({ wordIndex, name })),
  onSubmit: value => {
    dispatch(wordUpdate({ wordIndex, name, value }))
    toggleEdit()
  },
})

export default connect(
  null,
  mapDispatchToProps
)(Property)
