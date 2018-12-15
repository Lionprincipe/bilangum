import { connect } from 'react-redux'
import Property from '../components/Property'
import { propertyDelete } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  const { wordId } = ownProps
  return {
    onDelete: name => dispatch(propertyDelete({ index: wordId, name })),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Property)
