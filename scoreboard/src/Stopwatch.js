import React,{Component} from 'react'

class Stopwatch extends Component {
    constructor(){
        super()
        this.state = {
            isRunning: false,
            elapsedTime: 0,
            preViousTime: 0
        }
    } 
    
    componentDidMount(){
       this.intervalID = setInterval(() => this.tick(), 100)
    }

    tick = () => {
      if (this.state.isRunning) {
          const now = Date.now();
          this.setState({
              preViousTime: now,
              elapsedTime: this.state.elapsedTime + (now - this.state.preViousTime)
          });
       }
    }
    
    handleStopwatch = () => {
        this.setState({
            isRunning: !this.state.isRunning
        });
        if(!this.state.isRunning){
            this.setState({ preViousTime: Date.now() });
        }
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                <button onClick={this.handleStopwatch}>
                    { this.state.isRunning? "Stop" : "Start" }
                </button>
                <button>Reset</button>
            </div>
        )
    }
}

export default Stopwatch