import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './Keypad';
import Output from './Output';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      result:''
    }
  }

  buttonPressed=(name)=>{

    if(name==="="){
      this.calculate();
    }
    else if(name==="ce")
    {
      this.backspace();
    }
    else if(name==="c")
    {
      this.reset();
    }
    else{
      this.setState({
        result:this.state.result + name
      })
    }
  }

  calculate =()=>{
    try{
      this.setState({
        result:eval(this.state.result)
      })
    }
    catch(e)
    {
      this.setState({
        result:"error"
      })
      
    }
    
  }

  reset = ()=>{
    this.setState({
      result:""
    })
  }

  backspace = ()=>{
    if(this.state.result==="")
    {
      this.setState({
        result:""
      })
    }
    else{
      this.setState({
        result:this.state.result.slice(0,-1)
      })
    }
  }


  
render(){
  return (
    <div className="calculator-body">
      <h2>React Calculator App</h2>
      <Output result={this.state.result}/>
      <Keypad buttonPressed={this.buttonPressed}/>
    </div>
  )
}
}

export default App;
