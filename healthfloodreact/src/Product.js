import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loaded: false,
            placeholder: "Loading",
            food_data:{}
        }

    }

    get_data= async(id) => {
        
        let data1 = await axios.get('http://127.0.0.1:8000/product=${id}/').then(res=>{
            return res.data
        })
        console.log(data1);
        this.setState({ food_data: data1 });
    };
    
    componentDidMount(){
        this.get_data();
    }

    render(){
        const { food_data } = this.state
        console.log(food_data)
        const { id,Name,price,taste_meter } = food_data
        
        return(
            <div>
                <h1>{ id }</h1>
                <p>{ Name }</p>
            </div>
        )
    }
    
}
export default Product
