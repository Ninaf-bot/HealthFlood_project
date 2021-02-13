import React from 'react';
import Nav from './Nav';
import axios from 'axios';



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            userLoggedin:false,
        }
    }

    onsubmithandler=async(event)=>{
        event.preventDefault();
        console.log(this.state)
        await axios.post('http://127.0.0.1:8000/login/',this.state).then(res=>{
            console.log(res);
            this.props.setUsername(res.data.username);
        })
    }

    onchangehandler=event=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return(
            <div class="container" id="wrap">
            <div class="row">
            <div class="col-md-6 col-md-offset-3">
            <form  accept-charset="utf-8" class="form" role="form">   <legend>Login</legend>

                    <input type="text" onChange={this.onchangehandler} name="username" class="form-control input-lg" placeholder="User Name"  /><br/>                        
                    <input type="password" name="password" onChange={this.onchangehandler} class="form-control input-lg" placeholder="Password"  /><br/>
                    
                
                    <button class="btn btn-lg btn-primary btn-block signup-btn" onClick={this.onsubmithandler}>
                        login</button>
                </form>          
                </div>
            </div>            
            </div>

        )

    }
}
export default Login