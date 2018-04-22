import ShowComponent from './'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log(state.home)
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowComponent)