import React from 'react';
import './App.css';
import Loggin from './Components/LoggInForm';
import LoggOutUser from './Components/LoggOutUser';

class App extends React.Component {

  //const [isLoggedIn, setLoggin] = useState(false);

  constructor(props) {
    super(props)

    const currentUser = localStorage.getItem("currentUser");
    //const userId = { currentUser ? currentUser : null };

    this.state = { showStart: "Välkommen! Logga in eller registrera dig", currentUser: currentUser }

  };



  currentUserId = (userId, isSubscriber) => {
    this.setState({ currentUser: userId, isSubscriber: isSubscriber });
    console.log("Anropat callback", userId);

    localStorage.setItem("currentUser", userId);
  }

  logoutUser = () => {
    this.setState( { currentUser: null});
    localStorage.removeItem("currentUser"); 
  }


  render() {
    

    return (
      <div className="App">
        <Loggin showStart={this.state.showStart} getCurrentUser={this.currentUserId} />
        <LoggOutUser logOutUser={this.logoutUser} /> 
      </div>
    );
  }

}

export default App;
