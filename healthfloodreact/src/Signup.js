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

  
  render(){
    return(
      <div class="container" id="wrap">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <form action=""  method="post" accept-charset="utf-8" class="form" role="form">   <legend>Sign Up</legend>
                    <div class="row">
                        <div class="col-xs-6 col-md-6">
                            <input type="text" onChange={this.onchangehandler} name="firstname" class="form-control input-lg" placeholder="First Name"  />                        
                        </div>
                        <div class="col-xs-6 col-md-6">
                            <input type="text" name="lastname" class="form-control input-lg" placeholder="Last Name"  />   
                        </div>
                        <div class="col-xs-6 col-md-6">
                            <input type="text" name="username" class="form-control input-lg" placeholder="User Name"  />                        
                        </div>
                    </div>
                    <input type="text" name="email" class="form-control input-lg" placeholder="Your Email"  /><br/>
                    <input type='text' name='age' class='form-control input-lg' placeholder='Your Age'/><br/>
                    <input type="password" name="password" class="form-control input-lg" placeholder="Password"  /><br/>
                    <input type="password" name="confirm_password" class="form-control input-lg" placeholder="Confirm Password"  />                    
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
