import React, { Component } from 'react';

import MessageItem from './MessageItem';


class MessageList extends Component {
    render() {
        // console.log('MessageList', this.props.messages);
        // console.log('test list', this.props.testMessage);
        return (
            <div className='sc-message-list'>
                <h5>Message List</h5>
                <ul key={1}>
                    {this.props.messages.map(message => {
                        return(
                            <MessageItem key={message.id} text={message.text} />)
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default MessageList;
