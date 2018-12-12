import { connect } from 'react-redux'
import WordCard from '../components/WordCard'
import { wordUpdate } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  const { index } = ownProps
  return {
    onUpdate: (name, value) => dispatch(wordUpdate({ index, name, value })),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(WordCard)
