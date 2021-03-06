import React,{Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = { username: ''};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({ 
            username : evt.target.value 
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        alert(`You type ${this.state.username}`)
        this.setState({username:''})
    }
    render(){
        return(
            <div>
             <h1>Form Demo</h1>
             <form onSubmit={this.handleSubmit}>
                 <label htnlFor='username'>Username</label>
                 <br/><br/>
                 <input 
                    type='text' 
                    id='username'
                    value={this.state.username} 
                    onChange={this.handleChange}/>
             </form>
             <br/>
             <button>Submit</button>
            </div>
        )
    }
}

export default Form;