import React, {Component} from 'react'
class App extends Component{
  state = {
    name : "naveen",
    age : 23,
    occupation : "student"
  }
  render(){
    return <div>
      <p>I am a man named {this.state.name}</p>
      <p>I am a man with age {this.state.age}</p>
      <p>I am a man named {this.state.occupation}</p>
      <button>Click me</button>
    </div>
  }
}
export default App;
