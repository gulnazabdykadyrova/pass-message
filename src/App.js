import React from'react'
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      inputValue:"",
      message:""
    }
  }
  getInput=(e)=>{
    const newValue=e.target.value
    this.setState({inputValue:newValue})
  }

  btnHandler=()=>{
    const{inputValue}=this.state;
    this.setState({message:inputValue, inputValue:''})
  }
  render(){
    return(
      <div className ="container">
        <div className="content">
        <h3>A message you would like to pass</h3>
        <input value ={this.state.inputValue} onChange={this.getInput}/>
        <button onClick={this.btnHandler}>Submit</button>
        <h3>Last message delivered</h3>
        <p>{this.state.message}</p>
        </div>
      </div>
    )
  }
}
export default App;