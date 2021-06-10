import React from 'react';
import { MessageDisplay } from './MessageDisplay';
import { MessageForm } from './MessageForm';
import {io} from 'socket.io-client';

export class FormDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            socket: io('http://localhost:3500/')
        }
    }

    render(){
        return (<div id="form-and-display">
            <MessageForm socketConnection={this.state.socket}/>
            <MessageDisplay socketConnection={this.state.socket}/>
        </div>);
    }
}