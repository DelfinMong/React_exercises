import React,{Component} from 'react'
import axios from 'axios'


class GithubInfo extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        console.log(response.data)
    }
        render(){
            return(
                <div>
                   <h1>GITHUB USER INFO</h1>
                </div>
            )
        }
}

export default GithubInfo;