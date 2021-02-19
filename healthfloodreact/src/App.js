import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Main_page from './Main_page';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Products from './Products'

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
                <Login setUser={this.props.setUser}/>
            )
        }
        return(
            <div>
                <Router>
                <Switch>
                    <Route path='/products'>
                        <Products/>
                    </Route>
                    <Route exact path='/'>
                        <Main_page/>
                    </Route>
                </Switch>
                
                </Router>
            </div>
            
        )
        
    }
}

export default App;