import React, { Component } from 'react';

class Count extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    };
    this.countAdd = this.countAdd.bind(this);
    this.countSub = this.countSub.bind(this);
    this.countReset = this.countReset.bind(this);
  }
  countAdd(){
    this.setState((state) =>{
      return {count: this.state.count + 1};
    });
  };
  countSub(){
    this.setState((state) =>{
      if(this.state.count === 0){
        return {count: 0}
      }
      else {
        return {count: this.state.count - 1};
      }
    
    });
  };
  countReset(){
    this.setState((state) =>{
      return {count: 0};
    });
  };


  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick ={this.countAdd}>ADD</button>
        <button onClick ={this.countSub}>SUB</button>
        <button onClick ={this.countReset}>RESET</button>
      </div>
    );
  }
}

export default Count;
