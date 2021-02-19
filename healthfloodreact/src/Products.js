import React from 'react';
import axios from 'axios';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state={
            recommendation_data:[],
        }
    }

    get_recommendation_data=async()=>{
        let recommendation_data=await axios.post('http://127.0.0.1:8000/products/',{'userID':this.props.userID}).then(res=>{
            return res.data.recommendation
        })
        console.log(recommendation_data)
        this.setState({recommendation_data:recommendation_data})
    }

    componentDidMount=()=>{
        this.get_recommendation_data();
        
    }

    render(){
        return(
            <div>
                {this.state.recommendation_data.map((recommendation)=>
                    <p>{recommendation}</p>
                )}
            </div>
        )
    }
}
export default Products