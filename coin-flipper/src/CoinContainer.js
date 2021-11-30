import React,{Component} from 'react'

class CoinContainer extends Component {
    static defaultProps = {
        couns: [
            {sides: 'heads', url: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'tails', url: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
    constructor(){
        super();
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flicCoin(){

    }
    handleClick(e){

    }
    render(){
        return(
        <div className="CoinContainer">
            <h2>Let's Flip A Coin</h2>
            <p>
               Out of {this.state.nFlips} Flips, there have been {this.state.nHeads} {" "}
               heads and {this.state.nTails} tails.
            </p>
        </div>
        )
    }
}

export default CoinContainer;