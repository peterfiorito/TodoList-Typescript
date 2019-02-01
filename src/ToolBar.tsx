import * as React from "react";
import { DELETE_ALL } from './constants/ActionTypes'

import './styles/ToolBar.scss'

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
      <div className="tool-bar__wrapper">
        <button onClick={this.saveAll} className="tool-bar__button --save">Save List</button>
        <button onClick={this.deleteAll} className="tool-bar__button --delete">Delete List</button>
      </div>
    );
  }
}