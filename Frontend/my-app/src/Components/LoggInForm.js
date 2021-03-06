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

        this.tryUser(this.state.userName, this.state.userEmail, this.state.userPassword)
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
                this.props.getCurrentUser(data.userId, data.isSubscriber);
            })
            .catch (err => {
            console.log(err);
        });
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
                        value="Logga in" />
                </form>
            </div>
        );
    }
}

export default Loggin;