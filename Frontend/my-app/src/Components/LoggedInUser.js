import React from 'react';

class LoggedInUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ isSubscriber: this.props.isSubscriber});
        console.log(this.state);
        //this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange = (event) => {

        event.preventDefault();
        this.setState({isSubscriber: (this.state.isSubscriber ? false : true)}, () => {
            this.props.changeStatus(this.state.isSubscriber);
            console.log("handleChange körs");
            this.changeSubscriber(this.state.isSubscriber, localStorage.getItem("currentUser"));
        });

    }

    changeSubscriber  = (isSubscriber, userId) => {
        console.log("Loggar ut användarId:");
        console.log(userId);
        console.log(isSubscriber);
        console.log("Sparar ändringen till databas");

        var data= {"isSubscriber": isSubscriber}
        
        fetch("http://localhost:3000/users/" + userId, {
          "method": "PUT",
          "headers": {
            "Content-type":'application/json',
          },
          "body": JSON.stringify(data),
          })
          .catch(err => {
              console.log(err);
          });
      } 
    


    render() {

        return(
            <div>
            <h1>
                Hej! Du är inloggad. Välkommen att prenumerera på nyhetsbrev! 
            </h1>
            <form>
                Jag vill ha nyhetsbrev: 
                <input type="checkbox"
                    onChange={this.handleChange}
                    checked={this.state.isSubscriber}
                />
            </form>
            </div>
        );
    }
}

export default LoggedInUser;

