import { connect } from 'react-redux'
import {State, StateFromProps} from '../types/index'
import App from '../App'

const mapStateToProps = (state: State)=>({
  todos: state.todos
});

const ListContainer = connect<StateFromProps>(
  mapStateToProps,
)(App)

export default ListContainer
