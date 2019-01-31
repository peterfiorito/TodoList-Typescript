import * as React from "react";
import { DELETE_ALL } from './constants/ActionTypes'

interface Props{
  allTodos: Array<Object>;
}

export default class ToolBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.saveAll = this.saveAll.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }
  saveAll(){
    let list = this.props.allTodos;
    localStorage.setItem('ToDoList', JSON.stringify(list));
  }
  deleteAll(){
    localStorage.removeItem('ToDoList');
    (this.props as any).dispatch({type: DELETE_ALL});
  }
  render() {
    return (
      <div className="tool-bar">
        <button onClick={this.saveAll}>Save My Todo History</button>
        <button onClick={this.deleteAll}>Delete my todo History</button>
      </div>
    );
  }
}