import React from 'react';
import './App.css';
import Loggin from './Components/LoggInForm';
import LoggOutUser from './Components/LoggOutUser';
import LoggedInUser from './Components/LoggedInUser';

class App extends React.Component {

  //const [isLoggedIn, setLoggin] = useState(false);

  constructor(props) {
    super(props)

    const currentUser = localStorage.getItem("currentUser");

    this.state = { showStart: "Välkommen! Logga in eller registrera dig", currentUser: currentUser, isSubscriber: null }

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

  changeSubscriptionStatus = () => {
    //sätt state till det true/false
    //this.setState( { isSubscriber: isSubscriber});
  }


  render() {
    

    return (
      <div className="App">
        <Loggin showStart={this.state.showStart} getCurrentUser={this.currentUserId} />
        <LoggOutUser logOutUser={this.logoutUser} /> 
        <LoggedInUser isSubscriber={this.state.isSubscriber} changeStatus={this.changeSubscriptionStatus}/>
      </div>
    );
  }

}

export default App;
