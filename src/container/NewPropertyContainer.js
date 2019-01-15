import { connect } from 'react-redux'
import Property from '../components/Property'
import { removeNewProperty, createWordProperty } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  isEditing: true,
  value: '',
  placeholder: 'property',
})

const mapDispatchToProps = (dispatch, { wordId }) => ({
  deleteMe: () => dispatch(removeNewProperty({ wordId })),
  onSubmit: name => createWordProperty(wordId, name, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Property)
