import React, { Component } from 'react';
// import chatIconUrl from './../../assets/chat-icon.svg';

const TextMessage = (props) => {
    return <div className="sc-message--text">{props.text}</div>
};

export default TextMessage