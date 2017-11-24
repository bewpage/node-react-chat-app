import React, { Component } from 'react';
import { receivedMessage } from '../api';
import ChatBox from "./ChatBox";



class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTest: [],
        }
    };

    componentDidMount(){
        receivedMessage((data) => {
            this.setState({
                newTest: [data]
            })
        })
    }



    render() {
        return (
            <div>
                <ChatBox newTest={this.state.newTest}/>
            </div>
        );
    }
}

export default Main;
