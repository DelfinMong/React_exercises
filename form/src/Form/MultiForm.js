import React,{Component} from 'react'

class MultiForm extends Component {
    constructor(){
        super()
        this.state = { username: '' , email:'' , password:''};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({ 
            [evt.target.name] : evt.target.value
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
             <h1>Form w/ Multiple inputs</h1>
             <form onSubmit={this.handleSubmit}>
                 <input 
                    type='text'
                    placeholder='username' 
                    name='username'
                    value={this.state.username} 
                    onChange={this.handleChange}
                 />
                 <br/><br/>
                  <input 
                    type='email'
                    placeholder='email' 
                    name="email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                 /><br/> <br/>
                  <input 
                    type='password'
                    placeholder="password" 
                    name='password'
                    value={this.state.password} 
                    onChange={this.handleChange}
                 />
             </form>
             <br/>
             <button>Submit</button>
            </div>
        )
    }
}

export default MultiForm;



