import React from 'react';
import './App.css';
import Loggin from './Components/LoggInForm';

class App extends React.Component {

  //const [isLoggedIn, setLoggin] = useState(false);

  constructor(props){
    super(props)
    
    this.state = { showStart: "Välkommen! Logga in eller registrera dig", currentUser: ""};
  }

  currentUserId = (userId) => {
    console.log("Anropat callback", userId);
  }


  render() {
    return (
      <div className ="App">
        <Loggin showStart= {this.state.showStart} getCurrentUser = { this.currentUserId }/>
      </div>
    );
  }

}

export default App;
