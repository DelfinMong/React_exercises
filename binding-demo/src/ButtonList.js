import React, {Component} from 'react';
import './ButtonList.css';

class ButtonList extends Component {
    static defaultProps = {
        colors: ['#e056fd','#eb4d4b','#badc58','#f0932b']
    };
    constructor(props){
        super(props);
        this.state = { color: 'cyan'};
    }
    
    changeColor(color){}
    render(){
        return(
            <div className="ButtonList" style={{backgroundColor: this.state.color}}>
              {this.props.colors.map( c => { 
                const colorObj = {background: c};
                return <button style={colorObj}>CLICK ME</button>
              })}
            </div>
        )
    }
}

export default ButtonList;