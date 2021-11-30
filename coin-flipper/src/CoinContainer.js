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
            currCoin,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        
    }
}

export default CoinContainer;