import React, { Component } from "react";
import FibNumber from './FibNumber'
export default class FibGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        inputNum:null,
        results: [] 
    
    };
  }
  onInputChange = value => {
    this.setState({ inputNum: value });
  };
  onSubmit=(e, inputNum)=>{
e.preventDefault()
      fetch(`http://localhost:3000/api/fibonacci/${inputNum}`)
      .then(res=>res.json())
      .then(resJson=> {
        this.setState({results:resJson})
        })
  }


  render() {
     const fibResults= [...this.state.results]
     const results= fibResults.map((r, index)=>{
         return <FibNumber key={index}num={r}/>
     })
    return (
        <div className="container">
      <div className="ui-input">
          <form >
        <input  onChange= {e=> this.onInputChange(e.target.value)} type="number" min='1' placeholder="Search..." />
       
        </form>
        <button
            onClick={e =>this.onSubmit(e, this.state.inputNum)}
            type="submit"
          >
            Search!
          </button>  
      </div>
      <div className='results'>
      {results}
    </div>
    </div>
    );
  }
}
