import React, { Component } from 'react';
import TodoList from './TodoList';


class Todo extends Component {
    render(){
       return (
        <div className="">
          <button>Edit</button>
          <button>x</button>
          <li>{TodoList.props.task}</li>
        </div>
       );
    }
}

export default Todo;