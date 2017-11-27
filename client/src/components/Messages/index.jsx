import React, { Component } from 'react'
import TextMessage from './TextMessage'
import EmojiMessage from './EmojiMessage'
import chatIconUrl from './../../assets/chat-icon.svg'


class Message extends Component {

    // _renderMessageOfType(type) {
    //     switch(type) {
    //         case 'text':
    //             return <TextMessage {...this.props.message} />;
    //         case 'emoji':
    //             return <EmojiMessage {...this.props.message} />;
    //     }
    // }

    render () {
        console.log('text message to check ', this.props)
        let contentClassList = [
            "sc-message--content",
            (this.props.from === "User" ? "send" : "received")
        ];
        return (
            <div className="sc-message">
                <div className={contentClassList.join(" ")}>
                    <div className="sc-message--avatar" style={{
                        backgroundImage: `url(${chatIconUrl})`
                    }}></div>
                    {/*{this._renderMessageOfType(this.props.message.type)}*/}
                    <TextMessage text={this.props.message} />
                    {/*{this.props.message}*/}
                </div>
            </div>)
    }
}

export default Message