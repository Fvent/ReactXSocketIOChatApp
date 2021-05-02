import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {io} from 'socket.io-client';



export class MessageDisplay extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            socket: io('http://localhost:3500/')
        }
        // socket = io(this.state.endpoint);
      
    }

    componentDidMount(){  
        this.state.socket.on('message', data => {
            console.log(data);
            var node = document.createElement('div');
            node.setAttribute('class', 'list-group-item');
            var text = document.createTextNode(data.message);
            node.appendChild(text);
            document.getElementById('messageDisplayUL').appendChild(node);
        });
    }

    componentDidUpdate(){
        this.props.socketConnection.on('message', data => {
            console.log(data);
            var node = document.createElement('div');
            node.setAttribute('class', 'list-group-item');
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
            {/* <ul className="messageDisplayUL" id='messageDisplayUL'>

            </ul> */}
            <ListGroup id='messageDisplayUL'>

            </ListGroup>
        </div>);
    }

}