import React, { Component } from 'react';
import TodoList from './TodoList';


class Todo extends Component {
    render(){
       return (
        <div>
          <button>Edit</button>
          <button>X</button>
          <li>{this.props.task}</li>
        </div>
       );
    }
}

export default Todo;