import React from 'react';

class Loggin extends React.Component{

    constructor(props){
        super(props);
        this.state = { userName: '', usserId: '', userEmail: '', userPassword: '' };
        
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

   


    handleChange = (event) => {

        const stateToUpdate = event.target.name;
        this.setState({[stateToUpdate]: event.target.value })

    }

    handleSubmit = (event) => {
        // //kör callback tillbaks till parent igen
        // //med datan som behövs
        // //göra en fetch för att hämta informationen 
        this.props.getCurrentUser(this.state.userName);
        event.preventDefault();
    }



    render(){
        const showStart = this.props.showStart;
        return(
            <div>
            {showStart}
                <br/>
                <form onSubmit={ this.handleSubmit}>
                    <label>
                        Användarnamn:
                        <input type="text" 
                        name="userName" 
                        value={this.state.userName} 
                        onChange = { this.handleChange }/>
                        Lösenord:
                        <input type="text" 
                        name="userPassword" 
                        value={this.state.userPassword} 
                        onChange ={this.handleChange} />
                    </label>
                    <input 
                    type="submit" 
                    value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Loggin;