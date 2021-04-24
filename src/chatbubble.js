import {React, Component} from 'react';
import './App.css';


function Chatbubble(props) {
    return (
        <div className="chat-row">
        <div className={(props.from ? "user" : "chatbot")}>
            {props.message}
        </div>
        </div>
    );
  }

export default Chatbubble;