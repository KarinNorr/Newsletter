import React from 'react';

class LoggOutUser extends React.Component {

    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {

        console.log("Logout");
        this.props.logOutUser();
        event.preventDefault();
    }

    render() {

        

        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                <input
                        type="submit"
                        value="Logout" />
                </label>
            </form>
            </div>
        );

    }
}

export default LoggOutUser;