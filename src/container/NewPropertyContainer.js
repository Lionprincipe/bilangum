import { connect } from 'react-redux'
import Property from '../components/Property'
import { removeNewProperty, createWordProperty } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  isEditing: true,
  value: '',
  placeholder: 'property',
})

const mapDispatchToProps = (dispatch, { wordIndex }) => ({
  deleteMe: () => dispatch(removeNewProperty({ wordIndex })),
  onSubmit: name => createWordProperty(wordIndex, name, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Property)
