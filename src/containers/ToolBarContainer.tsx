import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import {DispatchFromProps, Action} from '../types/index'
import * as TodoActions from '../constants/ActionTypes'
import ToolBar from '../ToolBar'

function mapDispatchToProps (dispatch: Dispatch<Action>):DispatchFromProps{
  return bindActionCreators((TodoActions as any), dispatch)
}

const ToolBarContainer = connect< DispatchFromProps>(
  mapDispatchToProps
)(ToolBar)

export default ToolBarContainer