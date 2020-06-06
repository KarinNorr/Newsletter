import React from 'react';
import './App.css';
import Loggin from './Components/LoggInForm';
import LoggOutUser from './Components/LoggOutUser';
import LoggedInUser from './Components/LoggedInUser';
import AddNewUser from './Components/NewUserForm';

class App extends React.Component {

  //const [isLoggedIn, setLoggin] = useState(false);

  constructor(props) {
    super(props)

    const currentUser = localStorage.getItem("currentUser");

    this.state = { showStart: "Välkommen! LOGGA IN HÄR:", currentUser: currentUser, isSubscriber: null }

  };



  currentUserId = (userId, isSubscriber) => {
    this.setState({ currentUser: userId, isSubscriber: isSubscriber });
    console.log("Anropat callback", userId);

    localStorage.setItem("currentUser", userId);
  }

  logoutUser = () => {
    this.setState({ currentUser: null });
    localStorage.removeItem("currentUser");
  }

  changeSubscriptionStatus = (isSubscriber) => {
    this.setState({ isSubscriber: isSubscriber});
  }


  render() {

    if (this.state.currentUser == null) {
      return (
        <div className="App">
          <Loggin showStart={this.state.showStart} getCurrentUser={this.currentUserId} />
          <br/>
          <br/>
        <AddNewUser getCurrentUser={this.currentUserId}/>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <LoggedInUser isSubscriber={this.state.isSubscriber} changeStatus={this.changeSubscriptionStatus} />
          <LoggOutUser logOutUser={this.logoutUser} />
        </div>

      );
    }
  }
}


export default App;
