import React, {Component} from 'react';
import Welcome from './Welcome.js'

export default class App extends Component {
  state = {counter: 0, globalCounter: 0};
  increment = ()=>{
      this.setState({counter : this.state.counter + 1})
      this.setState({globalCounter: this.state.globalCounter + 1})
  }
  format = ()=>{
    this.setState({count : this.state.counter = 0})
  }
 

  render() {
    return (
     <Welcome
     counter= {this.state.counter}
     increment = {this.increment}
     format= {this.format}
     message= {this.state.globalCounter}
     />
     
    
    );
  }
}