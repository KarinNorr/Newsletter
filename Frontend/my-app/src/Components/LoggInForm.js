import React from 'react';

class Loggin extends React.Component{

    constructor(props){
        super(props);
        this.state = { valueName: ''}
        this.state = { valueUserid: ''}
        this.state = { valueEmail: ''}

    }

    handleChange = (event) => {
        this.setState( {valueName:event.target.value })
        this.setState( {valueUserid:event.target.value })
        this.setState( {valueEmail:event.target.value })


    }

    handleSubmit = (event) => {
        //kör callback tillbaks till parent igen
        //med datan som behövs
        //göra en fetch för att hämta informationen 
        this.props.getCurrentUser(this.state.valueName);
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
                        <input type="text" value = { this.state.value } onChange = { this.handleChange } />
                        Lösenord:
                        <input type="text" value = { this.state.value } onChange = { this.handleChange } />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
               {/* <button onClick>Tryck här!</button> */}
            </div>
        );
    }
}

export default Loggin;