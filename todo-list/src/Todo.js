import React, { Component } from 'react';
import TodoList from './TodoList';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isEditing: false,
            task: ''
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleUpdate = this.handleUpdate(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    toggleForm(){
        this.setState({ isEditing: !this.state.isEditing})
    }
    handleChange(evt){
        this.setState({
            // only have one thing changing.
            task : evt.target.value
            // [evt.target.name] : evt.target.value
        })
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
                      <input 
                         type="text" 
                         value={this.state.task}
                         name="task"
                         onChange={this.handleChange}
                      />
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