import React, { Component } from 'react';

import MessageList from "./MessageList";
import PostMessageForm from "./PostMessageForm";



class ChatBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            test: [],
            messages: []
        }
    };


    appendChatMessage = (text) => {
        let newMessage = {
            id: new Date().getTime(),
            timestamp: new Date().getTime(),
            text
        };
        this.setState({
            messages:[...this.state.messages, newMessage]
        });
    };


    render() {
        console.log('test info', this.props.newTest);
        let classList = [
            "sc-chat-window"
        ];
        return (
            <div className={classList.join(' ')}>
                <h4>Chat Box</h4>
                <div>
                    {
                        this.props.newTest.map(data => {
                            return(
                                <div key={new Date().getTime()}>
                                    <p><span>From</span>: {data.from}</p>
                                    <p>Message: {data.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <MessageList testMessage={this.state.test}  messages={this.state.messages}/>
                <PostMessageForm appendChatMessage={this.appendChatMessage}/>
            </div>
        );
    }
}

export default ChatBox;
