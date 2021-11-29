import React,{Component} from 'react';

class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        maxBalls: 6,
        maxNum: 40
    }
    constructor(){
        super(props);
        this.state = {
            nums: Array.length({length:this.props.maxBalls})
        };
    }
    generate(){

    }
    handleClick () {

    }
    render() {
        return (
           <section className="Lottery">
            <h1>{this.props.title}</h1>
            <div>
                Balls go here!
            </div>
            <button onClick={this.handleClick}>Generate</button>
           </section> 
        )
    }
}

export default Lottery;