import React,{Component} from 'react'

class ShoppingListForm extends Component {
    constructor(props){
        super(props);
        this.state = {
             name: '',
             qty: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(){

    }
   render(){
        return(
            <div>
                <form>
                    <label></label>
                    <input
                     id='name'
                     name='name'
                     value='this.state.name'
                     onChange='this.onChange'
                     />
                    
                </form>
            </div>
        )
    }
}

export default ShoppingListForm