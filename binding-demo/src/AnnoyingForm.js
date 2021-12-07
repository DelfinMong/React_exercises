import React,{ Component } from 'react'

class AnnoyingForm extends Component {
    handleKeyUp(evt){
        if(evt.keyCode === 56){
            alert('*** I getting really good at react ***')
        } else {
            alert(' *** work still in progress ***')
        }
    }
    render(){
        return(
            <div>
                <h3>Try Typing In here</h3>
                <textarea onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}


export default AnnoyingForm;