import * as React from "react";
import { hot } from 'react-hot-loader/root'
import TodoList from './TodoList'
import TodoContainer from './containers/TodoContainer'
import ToolBarContainer from './containers/ToolBarContainer'

import './styles/App.scss'

export interface Props{
  todos: Array<Object>;
}

export default class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.logger = this.logger.bind(this);
  }
  // Chunck to erase for testing only
  logger(todos: Array<Object>){
    let res = todos.map((todo: Object)=>{
      return (todo as any).text;
    });
    return res;
  }
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>
            ToDo List!
          </h1>
        </header>
        <div className="App__wrapper">
          <div className="App__toolbar">
          <ToolBarContainer allTodos={this.props.todos} />
          </div>
          <div className="App__input">
            <TodoContainer todo={{text: '', completed: false, editing: true, id: 0, date: new Date()}}/>
          </div>
          <div className="App__list">
            <TodoList allTodos={this.props.todos}/>
          </div>
        </div>
      </div>
    );
  }
}