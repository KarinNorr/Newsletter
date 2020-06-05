import React from 'react';

class AddNewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userName: '', userEmail: '', userPassword: '', userIsSubscriber: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //skriva metoderna
    handleChange = (event) => {

        const stateToUpdate = event.target.name;
        this.setState({ [stateToUpdate]: event.target.value })

    }

    handleSubmit(event){
        this.addNewUser(this.state.userName, this.state.userEmail, this.state.userPassword, this.state.userIsSubscriber);
        event.preventDefault();
    }

    //posta ny användare. Gör klar funktionen
    addNewUser = (userName, userEmail, userPassword, userIsSubscriber) => {
        console.log("Användare läggs till");

        var data = { userName: userName, userEmail: userEmail, userPassword: userPassword, isSubscriber:userIsSubscriber }
        console.log(data);

        fetch("http://localhost:3000/users/newUser", {
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
                //this.setState({ userId: data.userId })
                //kalla på funktionen 
                this.props.getCurrentUser(data.userId, data.isSubscriber);
            })
            .catch (err => {
            console.log(err);
        });
    }



    render() {
        return (
            <div>
                REGISTRERA DIG FÖR NYHETSBREV HÄR:
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Användarnamn:
                        <input type="text"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleChange} />
                            <br/>
                        Email:
                        <input type="text"
                            name="userEmail"
                            value={this.state.userEmail}
                            onChange={this.handleChange} />
                            <br/>
                        Lösenord:
                        <input type="text"
                            name="userPassword"
                            value={this.state.userPassword}
                            onChange={this.handleChange} />
                        <br/>
                        Nyhetsbrev:
                        <input type="checkbox"
                            name="userIsSubscriber"
                            onChange={this.handleChange}
                            value={this.state.userIsSubscriber}
                            
                        />
                    </label>
                    <br/>
                    <br/>
                    <input
                        type="submit"
                        value="Registrera nu!" />
                </form>
            </div>
        );
    }

}






export default AddNewUser