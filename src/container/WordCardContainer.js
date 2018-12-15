import { connect } from 'react-redux'
import WordCard from '../components/WordCard'
import { wordUpdate, toggleOpenWordCard } from '../actions'
import { getWordElOpenStatus } from '../selectors'

const mapPropsToState = (state, ownProps) => {
  return { isOpen: getWordElOpenStatus(ownProps, state) }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { index } = ownProps
  return {
    onUpdate: (name, value) =>
      dispatch(
        wordUpdate({
          index,
          name,
          value,
        })
      ),
    toggleOpenMode: () =>
      dispatch(
        toggleOpenWordCard({
          wordId: index,
        })
      ),
  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(WordCard)
