import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CalcPageView from './CalcPage.view'
import { aact, ract } from './CalcPage.state'
import { push } from 'react-router-redux'

export default connect(
  state => {
    return state.calcState
  },
  dispatch => ({
    aact: bindActionCreators(aact, dispatch),
    ract: bindActionCreators(ract, dispatch),
    push: bindActionCreators(push, dispatch)
  })
)(CalcPageView)
