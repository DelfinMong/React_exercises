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
          this.setState( prevState => ({
              preViousTime: now,
              elapsedTime: prevState.elapsedTime + (now - this.state.preViousTime)
          }));
       }
    }
    
    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }));
        if(!this.state.isRunning){
            this.setState({ preViousTime: Date.now() });
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
     }

    handleReset = () => {
        this.setState({
            elapsedTime: 0
        })
    }

    render() {
        const seconds =  Math.floor(this.state.elapsedTime/1000)
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{ seconds }</span>
                <button onClick={this.handleStopwatch}>
                    { this.state.isRunning? "Stop" : "Start" }
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch