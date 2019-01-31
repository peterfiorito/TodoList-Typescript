type ADD_TODO = {
  type: ADD_TODO
};
type DELETE_TODO = {
  type: DELETE_TODO
};
type EDIT_TODO = {
  type: EDIT_TODO
};
type COMPLETE_TODO = {
  type: COMPLETE_TODO;
};

export type Action = ADD_TODO | DELETE_TODO | EDIT_TODO | COMPLETE_TODO;

export type Dispatch = (action: Action) => void;

export type State = {
  todos: Array<Object>;
};
export type Store = {
  todos: Array<Object>;
};

export interface StateFromProps {
  todos: Array<Object>;
}

export interface DispatchFromProps {
  addTodo: (text: string)=> void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number)=> void;
  completeTodo: (id: number)=> void;
}

export interface todo{
  text: string,
  completed: boolean,
  id: number,
  date: Date
}