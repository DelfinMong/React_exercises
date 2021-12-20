import React, { Component } from 'react';
import TodoList from './TodoList';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleUpdatev = this.handleUpdate(this)
    }
    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    toggleForm(){
        this.setState({ isEditing: !this.state.isEditing})
    }
    handleUpdate(evt){
        evt.preventDefault()
    }
    render(){
       let result;
       if(this.state.isEditing){
            result = (
                <div>
                  <form onSubmit={this.handleUpdate}>
                      <input type="text" />
                      <button>Save</button>
                  </form>
                </div>
            )
       } else {
           result = (
            <div>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{this.props.task}</li>
            </div>
           )
       }
       return result;
    }
}

export default Todo;