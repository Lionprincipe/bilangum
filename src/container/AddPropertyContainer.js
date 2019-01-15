import { connect } from 'react-redux'
import AddProperty from '../components/AddPorperty'
import { addNewProperty } from '../actions'
import { selectAddPropertyNumber } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  nbField: selectAddPropertyNumber(state, ownProps),
})
const mapDispatchToProps = (dispatch, { wordId }) => ({
  onClick: () =>
    dispatch(
      addNewProperty({
        wordId,
      })
    ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProperty)
