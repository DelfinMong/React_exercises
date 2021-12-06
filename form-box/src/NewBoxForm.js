import Reat,{ Component } from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            height: '',
            width: '',
            colot:''
        }
    }
    render(){
        return(
            <form>
                <div>
                    <label>Height</label>
                    <input 
                      type='text'
                      name='height'
                      value={this.state.height}
                      onChange={this.handleChange}
                      id='height' 
                    />
                </div>
            </form>
        )
    }
}

export default NewBoxForm;