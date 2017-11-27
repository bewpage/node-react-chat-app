import React, { Component } from 'react';

import { receivedMessage } from '../api';
import MessageList from "./MessageList";
import PostMessageForm from "./PostMessageForm";
import Header from "./Header";



class ChatBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            send: [],
            received: []
        }
    };

    componentDidMount(){
       this.testReceivedMessage();
    }


    appendChatMessage = (text) => {
        this.setState({
            send: [...this.state.send, text]
        });
    };

    testReceivedMessage = () => {
        receivedMessage(data => {
            const { text, from, createdAt } = data;
            let newReceived = {
                from,
                text,
                createdAt
            };
            this.setState({
                received: [...this.state.received, newReceived]
            });
        });
    };


    render() {
        let classList = [
            "sc-chat-window",
            (this.props.isOpen ? "opened" : "closed")
        ];
        return (
            <div className={classList.join(' ')}>
                <Header className=''
                        // teamName={this.props.agentProfile.teamName}
                        teamName={"Bartek"}
                        // imageUrl={this.props.agentProfile.imageUrl}
                        onClose={this.props.onClose}
                />
                <div>
                    {/*{*/}
                        {/*this.props.newTest.map(data => {*/}
                            {/*return(*/}
                                {/*<div key={new Date().getTime()}>*/}
                                    {/*<p><span>From</span>: {data.from}</p>*/}
                                    {/*<p>Message: {data.text}</p>*/}
                                {/*</div>*/}
                            {/*)*/}
                        {/*})*/}
                    {/*}*/}
                </div>
                <MessageList data={this.state}
                             // send={this.state.send}
                             // receivedMessage={this.state.received}
                />
                <PostMessageForm appendChatMessage={this.appendChatMessage}/>
            </div>
        );
    }
}

export default ChatBox;
