import React from 'react';
import './App.css';
import { MessageForm } from './functionality/MessageForm';
import { MessageDisplay } from './functionality/MessageDisplay'
import { io } from 'socket.io-client';
import { LoginForm } from './functionality/LoginForm';



export class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            socket: io('http://localhost:3500/')
        }
    }

    render(){
        return <div className="app">
            <h1>React X Socket.IO Chatapp</h1>
            <LoginForm />
            {/* <MessageForm socketConnection={this.state.socket} />
            <MessageDisplay /> */}
        </div>
    }
}
