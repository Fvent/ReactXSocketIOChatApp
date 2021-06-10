import React from 'react';
import { FormControl } from 'react-bootstrap';

export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.usernameInput.value);
        var payload = {username: event.target.usernameInput.value, password: event.target.passwordInput.value};
        var xhr = new XMLHttpRequest();
        var url = 'http://localhost:3500/login';
        xhr.open('POST', url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = () => {
            console.log(xhr.response);
            // if(xhr.responseText !== 'Invalid credentials'){
            //     return 
            // }
        };
        xhr.send(JSON.stringify(payload));
        
        document.getElementById('loginForm').reset();
    }

    render(){
        return (<div id="loginFormDiv">
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <label for="usernameInput"><h4>Username</h4></label>
                <FormControl type="text" name="usernameInput" id="usernameInput"></FormControl>
                <label for="passwordInput"><h4>Password</h4></label>
                <FormControl type="password" name="passwordInput" id="passwordInput"></FormControl>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>);
    }
}