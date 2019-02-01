import * as React from "react";
import { todo } from './types'
import TodoContainer from './containers/TodoContainer'

import './styles/TodoList.scss'

type Props = {
  allTodos: Array<Object>;
};

export default class TodoList extends React.Component<Props> {
  render() {
    let allTodos = this.props.allTodos;
    return(
      <ul className="todo-list">
        {allTodos.map((todo: todo) =>
          <TodoContainer key={todo.id} todo={todo} />
        )}
      </ul>
    )
  }
}