import React, { Component } from 'react';

import { createMessage } from '../api';

class PostMessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            from: '',
            text: ''
        }
    }

    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        })
    };

    submitChat = (event) => {
        event.preventDefault();
        const { text } = this.state;
        console.log('Chat text: ', text);
        this.props.appendChatMessage(this.state.text);
        createMessage(this.state);
    };


    render(){
        return (
            <div className='form-inline'>
                <div className='form-group'>
                    <input type="text"
                           className='form-control'
                           placeholder='Add a message'
                           onChange={event => this.handleAnyInputChange(event, 'text')}
                    />
                    <button className='btn btn-success'
                            type='button'
                            onClick={this.submitChat}

                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default PostMessageForm;
