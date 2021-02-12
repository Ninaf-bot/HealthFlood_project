import logo from './logo.svg';
import './Signup.css';
import React from 'react';
import axios from 'axios'


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoggedin: false,
      username:'',
      firstname:'',
      lastname:'',
      email:'',
      age:'',
      password:'',
    }
  }

  onchangehandler=event => {
    this.setState({[event.target.name]:event.target.value})
    console.log(this.state)
  }

  onsubmithandler=event =>{
    event.preventDefault();
    fetch('http://127.0.0.1:8000/signup/',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify(this.state)
    })
  }
  
  render(){
    return(
      <div class="container" id="wrap">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <form action=''  method="post" onSubmit={this.onsubmithandler} accept-charset="utf-8" class="form" role="form">   <legend>Sign Up</legend>
                    <div class="row">
                        <div class="col-xs-6 col-md-6">
                            <input type="text" onChange={this.onchangehandler} name="firstname" class="form-control input-lg" placeholder="First Name"  />                        
                        </div>
                        <div class="col-xs-6 col-md-6">
                            <input type="text" onChange={this.onchangehandler} name="lastname" class="form-control input-lg" placeholder="Last Name"  />   
                        </div>
                        <div class="col-xs-6 col-md-6">
                            <input type="text" onChange={this.onchangehandler} name="username" class="form-control input-lg" placeholder="User Name"  />                        
                        </div>
                    </div>
                    <input type="text" name="email" onChange={this.onchangehandler} class="form-control input-lg" placeholder="Your Email"  /><br/>
                    <input type='text' name='age' onChange={this.onchangehandler} class='form-control input-lg' placeholder='Your Age'/><br/>
                    <input type="password" name="password" onChange={this.onchangehandler} class="form-control input-lg" placeholder="Password"  /><br/>
                    <input type="password" name="confirm_password" onChange={this.onchangehandler} class="form-control input-lg" placeholder="Confirm Password"  />                    
                    <br />
              <span class="help-block">By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span><br/>
                    <button class="btn btn-lg btn-primary btn-block signup-btn" type="submit">
                        Create my account</button>
            </form>          
          </div>
        </div>            
      </div>
    )
  }
}

export default Login;
