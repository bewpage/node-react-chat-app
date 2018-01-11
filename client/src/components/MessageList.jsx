import React, { Component } from 'react';

// import MessageItem from './MessageItem';
import Message from './Messages'


class MessageList extends Component {



    render() {
        // console.log('test sprawdzic co to jest props', this.props);
        return (
            <div className='sc-message-list'>
                <ul>
                    {this.props.data.received.map((message, i) => {
                        // console.log('test sprawdzic co to jest', message);
                        return(
                            <Message key={i} message={message.text} from={message.from}/>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
}




export default MessageList;
