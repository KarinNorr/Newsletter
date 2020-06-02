import React from 'react';

class Loggin extends React.Component{

    constructor(props){
        super(props);
        this.state = { userName: '', usserId: '', userEmail: '', userPassword: '' };
        
         this.handleChange = this.handleChange.bind(this);
    }

   


    handleChange = (event) => {
        console.log(event.target);
        //const userName = event.target.userName.value;
        console.log("Användarnamn:");
        //console.log(userName);

        this.setState = ({userName: event.target.value })
        // console.log(event.target);
        // this.setState( {valueName:event.target.name.value })
        console.log( {userName:event.target.value} );
        // this.setState( {valueUserid:event.target.value })
        // this.setState( {valueEmail:event.target.value })
        // this.setState( {valuePassword:event.target.password.value })


    }

    handleSubmit = (event) => {
        // //kör callback tillbaks till parent igen
        // //med datan som behövs
        // //göra en fetch för att hämta informationen 
        this.props.getCurrentUser(this.state.userName.value);
        event.preventDefault();
    }



    render(){
        const showStart = this.props.showStart;
        return(
            <div>
            {showStart}
                <br/>
                <form onSubmit = { this.handleSubmit}>
                    <label>
                        Användarnamn:
                        <input type="text" name="userName" value ={ this.state.userName.value } onChange = { this.handleChange } />
                        Lösenord:
                        <input type="text" name="userPassword" value = { this.state.userPassword.value } onChange = { this.handleChange } />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
               {/* <button onClick>Tryck här!</button> */}
            </div>
        );
    }
}

export default Loggin;