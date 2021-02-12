import React from 'react';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }

    onsubmithandler=event=>{
        fetch('http://127.0.0.1:8000/login',{
            method:'POST',
            headers:{
                Accept:'Application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify({'username':this.state.username,'password':this.state.username})
        }
        )
    }

    onchangehandler=event=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return(
            <div class="container" id="wrap">
            <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <form action=''  method="post" onSubmit={this.onsubmithandler} accept-charset="utf-8" class="form" role="form">   <legend>Sign Up</legend>

                    <input type="text" onChange={this.onchangehandler} name="username" class="form-control input-lg" placeholder="User Name"  /><br/>                        
                    <input type="password" name="password" onChange={this.onchangehandler} class="form-control input-lg" placeholder="Password"  /><br/>
                    
                
                    <button class="btn btn-lg btn-primary btn-block signup-btn" type="submit">
                        Create my account</button>
                </form>          
                </div>
            </div>            
            </div>

        )

    }
}
export default Login