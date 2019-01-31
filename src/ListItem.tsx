import * as React from "react";
import { todo } from './types'
import InputText from './InputText'
import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./constants/ActionTypes";

interface state {
  editing?: boolean;
  newTodo?: boolean;
};
type Props = {
  todo: todo;
}

export default class ListItem extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);

    this.state = {
      editing: (this.props.todo as any).editing || false,
      newTodo: true,
    };

    this.handleSave = this.handleSave.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleSave = (id: number, text: string) => {
    if(!text) {
      return
    }
    // if the props.todo.text is empty, this is a new todo being created
    if(this.props.todo.text){
      this.setState({ editing: false, newTodo: false });
      (this.props as any).dispatch({type: EDIT_TODO, id: id, text: text})
    } else {
      (this.props as any).dispatch({type: ADD_TODO, id: id, text: text})
      this.setState({newTodo: true});
      this.props.todo.text = "";
    }
  }
  deleteTodo(id: number){
    (this.props as any).dispatch({type: DELETE_TODO, id: id})
  }
  handleDoubleClick(){
    this.setState({editing: true})
  }
  formatDate(date: Date) {
    return String(date).split(" ").slice(0,4).join(" ")
  }
  render() {
    let element
    if (this.state.editing) {
      element = (
        <InputText  text={(this.props as any).todo.text}
                    editing={this.state.editing}
                    newTodo = {this.state.newTodo}
                    placeholder=''
                    onSave={(text: string) => this.handleSave(this.props.todo.id, text)} />
      )
    } else {
      element = (
        <div className="list-item">
          <label onDoubleClick={this.handleDoubleClick}>
              {this.props.todo.text}
          </label>
          <div>{this.formatDate(this.props.todo.date)}</div>
          <button className="list-item__delete"
                  onClick={() => this.deleteTodo((this.props.todo as any).id)} />
        </div>
      )
    }
    return (
      <li>{element}</li>
    );
  }
}