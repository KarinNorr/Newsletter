import React from 'react';

class Loggin extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userName: '', userId: '', userEmail: '', userPassword: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (event) => {

        const stateToUpdate = event.target.name;
        this.setState({ [stateToUpdate]: event.target.value })

    }

    handleSubmit = (event) => {
        // //kör callback tillbaks till parent igen
        // //med datan som behövs
        // //göra en fetch för att hämta informationen 

        this.tryUser(this.state.userName, this.state.userEmail, this.state.userPassword)

        this.props.getCurrentUser(this.state.userName);
        event.preventDefault();
    }



    tryUser = (userName, userEmail, userPassword) => {
        console.log("Användarnamn testas");

        var data = { userName: userName, userEmail: userEmail, userPassword: userPassword }

        fetch("http://localhost:3000/users/tryUser", {
            "method": "POST",
            "headers": {
                "Content-type": 'application/json',
            },
            "body": JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Nu kommer datan tillbaks")
                console.log(data)
                //this.setState({ userId: data })
            })
            .catch (err => {
            console.log(err);
        });
        console.log("Nu kommer datan tillbaks")
        
    }



    render() {
        const showStart = this.props.showStart;
        return (
            <div>
                {showStart}
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Användarnamn:
                        <input type="text"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleChange} />
                        Email:
                        <input type="text"
                            name="userEmail"
                            value={this.state.userEmail}
                            onChange={this.handleChange} />
                        Lösenord:
                        <input type="text"
                            name="userPassword"
                            value={this.state.userPassword}
                            onChange={this.handleChange} />
                    </label>
                    <input
                        type="submit"
                        value="Submit" />
                </form>
            </div>
        );
    }
}

export default Loggin;