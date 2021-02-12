import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Main_page from './Main_page';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.usersigningup & (this.props.userLoggingin==false)){
            return(
                <Signup/>
            )
        }
        else if((this.props.usersigningup==false) & this.props.userLoggingin){
            return(
                <Login/>
            )
        }
        return(
            <Main_page/>
        )
        
    }
}

export default App;