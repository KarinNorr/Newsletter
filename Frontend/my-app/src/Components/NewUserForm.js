import React from 'react';

class AddNewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userName: '', userEmail: '', userPassword: '', userIsSubscriber: false };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
                            value={this.state.userIsSubscriber}
                            onChange={this.handleChange}
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