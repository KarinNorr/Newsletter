import React from 'react';
import './App.css';
import Loggin from './Components/LoggInForm';

class App extends React.Component {

  constructor(props){
    super(props)
    
    this.state = { showStart: "Välkommen! Här kan du snart logga in"};
  }


  render() {
    return (
      <div>
        <Loggin showStart= {this.state.showStart}/>
      </div>
    );
  }

}

export default App;
