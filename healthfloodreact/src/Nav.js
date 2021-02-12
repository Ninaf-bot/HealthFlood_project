import React from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';
import App from './App';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userLoggingin: false,
            usersigningup:false,

        }
    }

    sign_up_button_handler=event=>{
        this.setState({usersigningup: true,userLoggingin: false})
    }

    login_button_handler=event=>{
        this.setState({usersigningup: false,userLoggingin: true})
    }

    home_onclick_handler=event=>{
        this.setState({usersigningup: false,userLoggingin: false})
    }

    render(){
        return(
            <div>
                <nav>
                    <div class="row">
                        <img src="resources/css/img/logo-white.png" alt="Omnifood logo" class="logo"/>
                        <ul class="main-nav">
                            <li><a href="#" onClick={this.home_onclick_handler} >Home</a></li>
                            <li><a href="#">Food Delivery</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Our cities</a></li>
                            <li>
                                <button onClick={this.login_button_handler} >login</button>
                                <button onClick={this.sign_up_button_handler} >Sign up</button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <App usersigningup={this.state.usersigningup} userLoggingin={this.state.userLoggingin}/>
            </div>
        )

    }
}

export default Nav