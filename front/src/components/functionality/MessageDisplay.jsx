import React from 'react';
import {io} from 'socket.io-client';

var socket;

export class MessageDisplay extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            endpoint: 'http://localhost:3500/'
        }
        // socket = io(this.state.endpoint);
    }

    componentDidMount(){
        socket = io(this.state.endpoint);
        socket.on('message', data => {
            console.log(data);
            var node = document.createElement('LI');
            var text = document.createTextNode(data.message);
            node.appendChild(text);
            document.getElementById('messageDisplayUL').appendChild(node);
        });
    }
 
    // var node = document.createElement("LI");
    // var text = document.createTextNode(data.username+" : "+ data.message);
    // node.appendChild(text);
    // document.getElementById('message-ul').appendChild(node);
    render(){
        return (<div className="messageDisplayDiv">
            <ul className="messageDisplayUL" id='messageDisplayUL'>

            </ul>
        </div>);
    }

}