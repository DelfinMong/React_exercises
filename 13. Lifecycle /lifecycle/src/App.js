import React,{Component} from 'react'
import Timer from './Timer'
import ZenQuote from './ZenQuotes'

class  App extends Component{
        render(){
            return(
                <div>
                    {/* <Timer /> */}
                    <ZenQuote />
                </div>
            )
        }
}

export default App