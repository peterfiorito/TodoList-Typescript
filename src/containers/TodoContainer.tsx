import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import {DispatchFromProps, Action} from '../types/index'
import * as TodoActions from '../constants/ActionTypes'
import ListItem from '../ListItem'

function mapDispatchToProps (dispatch: Dispatch<Action>):DispatchFromProps{
  return bindActionCreators((TodoActions as any), dispatch)
}

const TodoContainer = connect< DispatchFromProps>(
  mapDispatchToProps
)(ListItem)

export default TodoContainer
