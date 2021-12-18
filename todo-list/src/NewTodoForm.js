import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { task:''},
            ]
        }
    }
    render(){
       return (
            <div>
                <form>
                    <label htmlFor='task'>New Todo</label>
                    <input type='text' placeholder='New Todo' id='task'/>
                </form>
            </div>
       );
    }
}

export default NewTodoForm;