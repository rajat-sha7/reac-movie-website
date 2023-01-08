import React, { Component } from 'react'
import '../SearchBox/SearchBox.css'

export default class SearchBox extends Component {
      

    constructor(props){
        super(props);
        this.state ={
            input:"",
        }
    }

    onChangeInput= e =>{
        e.preventDefault();
        const { value } = e.target;
        this.setState({input:value});
        // console.log(this.state.input)

        this.props.parentCallback(this.state.input)
       
    }

   
  

  render() {

    return (
      <div className='searchbox'>
          
          <input   name=' ' onChange={this.onChangeInput}  placeholder='Enter the movie name ...'   />
        
      </div>
    )
  }
}
