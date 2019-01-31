import { todo } from '../types';

import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    DELETE_ALL
  } from '../constants/ActionTypes'
  
  let initialState: Array<Object>;

  !function setInitialState() {
    let checkStorage = localStorage.getItem('ToDoList');
    if(checkStorage){
      initialState = JSON.parse(checkStorage);
    } else {
      initialState = [{
        text: 'A sample todo',
        completed: false,
        id: 0,
        date: new Date()
      }];
    }
    return initialState;
  }();
  
  export default function todos(state = initialState, action: any) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            id: Number(state.reduce((maxId: number, todo:todo) => Math.max(todo.id, maxId), -1)) + 1,
            completed: false,
            text: action.text,
            date: new Date()
          }
        ]
  
      case DELETE_TODO:
        return state.filter((todo: todo) => todo.id !== action.id)
  
      case EDIT_TODO:
        return state.map((todo: todo) => todo.id === action.id ? { ...todo, text: action.text } : todo)
  
      case COMPLETE_TODO:
        return state.map((todo: todo) => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
        
      case DELETE_ALL:
        return state = []
  
      default:
        return state
    }
  }
  