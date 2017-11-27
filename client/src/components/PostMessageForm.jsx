import React, { Component } from 'react';

import { createMessage } from '../api';

import SendIcon from './icons/SendIcon';
import EmojiIcon from './icons/EmojiIcon';
import EmojiPicker from './emoji-picker/EmojiPicker';

class PostMessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputActive: false,
            from: 'User',
            text: '',
        }
    }


    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        });
    };

    submitChat = (event) => {
        event.preventDefault();
        const { text } = this.state;

        if(text.length > 0){
            console.log('text jest dluzszy niz 0');
            this.props.appendChatMessage(this.state);
            createMessage(this.state);
            this.setState({
                text: ''
            });
        }
    };


    // _handleEmojiPicked = (emoji) => {
    //     this.props.onSubmit({
    //         author: 'me',
    //         type: 'emoji',
    //         data: { emoji }
    //     });
    // };




    render(){
        return (
            <form className={`sc-user-input ${(this.state.inputActive ? 'active' : '')}`}>
                <input
                    className="sc-user-input--text"
                    tabIndex="0"
                    contentEditable="true"
                    role="button"
                    // onFocus={() => { this.setState({ inputActive: true }); }}
                    // onBlur={() => { this.setState({ inputActive: false }); }}
                    value={this.state.text}
                    onChange={event => this.handleAnyInputChange(event, 'text')}
                    placeholder="Write a reply..."
                >
                </input>
                <div className="sc-user-input--buttons">
                    <div className="sc-user-input--button"></div>
                    <div className="sc-user-input--button">
                        {/*<EmojiIcon onEmojiPicked={this._handleEmojiPicked} />*/}
                    </div>
                    <div className="sc-user-input--button">
                        <SendIcon onClick={this.submitChat} />
                    </div>
                </div>
            </form>
        )
    }
}

export default PostMessageForm;




