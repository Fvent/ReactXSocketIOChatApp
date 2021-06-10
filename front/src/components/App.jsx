import React from 'react';
import './App.css';
import { io } from 'socket.io-client';
import { LoginForm } from './functionality/LoginForm';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { FormDisplay } from './functionality/Form-Display';



export class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            socket: io('http://localhost:3500/'),
            loggedIn : false,
            message: ''
        }
    }

    render(){
        return <div className="app">
            <h1>React X Socket.IO Chatapp</h1>
            {/* <LoginForm /> */}
            {/* <MessageForm socketConnection={this.state.socket} />
            <MessageDisplay /> */}
            <Router>
                <Switch>
                    <Route path="/" exact render={(props) => <LoginForm {...props}/>}/>
                    <Route path="/form-and-display" render={(props) => <FormDisplay {...props}/>} />
                    {/* <Route path="/" render={() => <MessageForm />}/>
                    <Route path="" render={() => <MessageDisplay />}/> */}
                </Switch>
            </Router>
        </div>
    }
}

// <Route path="/" exact render={(props) => <Home {...props} />} />
//                 <Route path="/home" render={(props) => <Home {...props} />}/>
//                 <Route path="/register" render={(props) => <Register {...props} />}/>
//                 <Route path="/login" render={(props) => <LogIn {...props} parentCallback={this.handleCallback} />}/>
//                 <Route render={() => <NotFound />}/>

// ReactDOM.render((
//     <Router>
//        <Route path = "" component = {App}>
          
//           <Route path = "/home" component = {App} />
//        </Route>
//     </Router>
//  ), document.getElementById('root'));