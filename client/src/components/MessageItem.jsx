import React, { Component } from 'react';


class MessageItem extends Component {


    render(){
        let contentClassList = [
            "sc-message--content",
            "sc-message--content.sent"
            // (this.props.message.author === "me" ? "sent" : "received")
        ];
        return(
            <div className='sc-message'>
                <div className={contentClassList.join(' ')}>
                    <div className='sc-message--text'>{this.props.text}</div>
                </div>
            </div>
        )
    }
}

export default MessageItem;