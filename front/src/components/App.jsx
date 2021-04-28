import React from 'react';
import './App.css';
import { MessageForm } from './functionality/MessageForm';
import { MessageDisplay } from './functionality/MessageDisplay'

export class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="app">
            <h1>React X Socket.IO Chatapp</h1>
            <MessageForm />
            <MessageDisplay />
        </div>
    }
}
