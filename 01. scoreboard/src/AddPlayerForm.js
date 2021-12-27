import React, {Component} from 'react';

class AddPlayerForm extends Component{

    // state = {
    //     value: ""
    // };

    // handleValueChange = (e) => {
    //     this.setState({value: e.target.value});
    // }

    playerInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
        // this.props.addPlayer(this.state.value);
        // this.setState({value : ""});
    }

    render(){
        console.log(this.playerInput)
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
                    // value={this.state.value}
                    // onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />

                <input
                    type="submit"
                    value="Add Player"
                />

            </form>
        )
    }

}

export default AddPlayerForm;