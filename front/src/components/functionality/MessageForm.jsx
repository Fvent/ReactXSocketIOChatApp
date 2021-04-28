// import { Button } from 'bootstrap';
import React from 'react';
import { FormControl } from 'react-bootstrap';
import {io} from 'socket.io-client'

var socket;
export class MessageForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            endpoint: 'http://localhost:3500/'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        // socket = io(this.state.endpoint);
        
    }
    componentDidMount(){
        socket = io(this.state.endpoint);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.messageInput.value);
        // location.reload();
        socket.emit('message', {message: event.target.messageInput.value});
        document.getElementById('MessageForm').reset()
    }

    render(){
        return (
        <div className='MessageFormDiv'>
            <form onSubmit={this.handleSubmit} id="MessageForm">
                <FormControl type='text' name="messageInput"></FormControl>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>);
    }
}