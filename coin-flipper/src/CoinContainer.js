import React,{Component} from 'react'
import { choice } from './helpers'
import Coin from './Coins';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {sides: 'heads', url: "https://tinyurl.com/react-coin-heads-jpg"},
            {sides: 'tails', url: "https://tinyurl.com/react-coin-tails-jpg"}
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
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState( st => {
          return {
            currCoin: newCoin,
            nFlips: st.nFlips + 1,
            nHeads: st.nHeads + (newCoin.sides === "heads" ? 1 : 0),
            nTails: st.nTails + (newCoin.sides === "tails" ? 1 : 0)
          };
        })
    }
    handleClick(e){
        this.flipCoin();
    }
    render(){
        return(
        <div className="CoinContainer">
            <h2>Let's Flip A Coin</h2>
            <button onClick={this.handleClick}> Flip Me!</button>
            <Coin info={this.state.currCoin}/>
            <p>
               Out of {this.state.nFlips} Flips, there have been {this.state.nHeads} {" "}
               heads and {this.state.nTails} tails.
            </p>
        </div>
        )
    }
}

export default CoinContainer;