import * as React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem'
import configureStore from 'redux-mock-store'


describe('ListItem methods', () => {
    const mockStore = configureStore();
    const initialState = {}; 
    let store;
    beforeEach(()=>{
      jest.clearAllMocks();
      store = mockStore(initialState)
    });
    it('should handle a new ToDo creation', () => {
      // mocks
      let todo = {
        text: '',
        completed: false,
        editing: true,
        id: 0,
        date: new Date()
      };
      let props = {
        dispatch: jest.fn()
      }
      // end mocks
      const wrapper = shallow(<ListItem todo={todo} {...props}/>);
      (wrapper.instance() as any).handleSave(1, 'Text');
      expect((wrapper.instance().props as any).dispatch).toHaveBeenCalled();
      expect((wrapper.instance().props as any).todo.text).toBe('');
    })
    it('should update a ToDo', () => {
      // mocks
      let todo = {
        text: 'Test Text',
        completed: false,
        editing: false,
        id: 0,
        date: new Date()
      };
      let props = {
        dispatch: jest.fn()
      }
      // end mocks
      const wrapper = shallow(<ListItem todo={todo} {...props}/>);
      (wrapper.instance() as any).handleSave(0, 'Text');
      expect((wrapper.instance().props as any).dispatch).toHaveBeenCalled();
    })
    it('should delete a ToDo', () => {
      // mocks
      let todo = {
        text: 'Test Text',
        completed: false,
        editing: false,
        id: 0,
        date: new Date()
      };
      let props = {
        dispatch: jest.fn()
      }
      // end mocks
      const wrapper = shallow(<ListItem todo={todo} {...props}/>);
      (wrapper.instance() as any).deleteTodo(0);
      expect((wrapper.instance().props as any).dispatch).toHaveBeenCalled();
    })
    it('should handle double clicking a ToDo', () => {
      // mocks
      let todo = {
        text: 'Test Text',
        completed: false,
        editing: false,
        id: 0,
        date: new Date()
      };
      let props = {
        dispatch: jest.fn()
      }
      let state = {
        editing: false
      }
      // end mocks
      const wrapper = shallow(<ListItem todo={todo} {...props} {...state}/>);
      (wrapper.instance() as any).handleDoubleClick();
      expect((wrapper.instance().state as any).editing).toBe(true);
    })
    it('should mark a Todo as completed', () => {
      // mocks
      let todo = {
        text: 'Test Text',
        completed: false,
        editing: false,
        id: 0,
        date: new Date()
      };
      let props = {
        dispatch: jest.fn()
      }
      // end mocks
      const wrapper = shallow(<ListItem todo={todo} {...props}/>);
      (wrapper.instance() as any).markTodoCompleted();
      expect((wrapper.instance().props as any).dispatch).toHaveBeenCalled();
    })
  });