import React from "react";
import ReactDOM from "react-dom";
import "./Content.css";

class Content extends React.Component {
  constructor(props){
        super(props);
        this.state={ content:"",
        Map:"Country",
        corrency:"",
        area:""        }
    }
    
   RegionSelect=(e)=>
    {
        var v=this.state.content;
        this.setState({Map:v});
        
        
    }

    Input=(e)=>{
        this.setState({content:e.target.value});
    }
    
    render(){
        return(
            <div className='box'>
            <div className="form">
                <select onChange={this.Input} name="region" id="region">
                    <option value="">Select</option>
                    <option value="United States">United States</option>
                    <option value="India">India</option>
                    <option value="United Kindom">United Kingdom</option>
                </select>
                <div className="button">
                <button onClick={this.RegionSelect}>Load</button>
                </div>
                <div className="detail">
                    <div>description for the</div><h3>{this.state.Map}</h3>
                    <div>Corrency: {this.state.corrency}</div>
                    <div>Area: {this.state.area}</div>
                </div>
            </div>  
            <div className="map"><div>map of the</div><h3>{this.state.Map}</h3></div>
                
               
            </div>
        )
    }
}

export default Content;