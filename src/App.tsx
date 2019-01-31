import * as React from "react";
import { hot } from 'react-hot-loader/root'
import TodoList from './TodoList'
import TodoContainer from './containers/TodoContainer'
import ToolBarContainer from './containers/ToolBarContainer'

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
        <header className="App-header">
          <h1>
            ToDo List!
          </h1>
        </header>
        <div>
          <TodoContainer todo={{text: '', completed: false, id: 0, editing: true, date: new Date()}}/>
        </div>
        <div>
          <TodoList allTodos={this.props.todos}/>
        </div>
        <ToolBarContainer allTodos={this.props.todos} />
      </div>
    );
  }
}