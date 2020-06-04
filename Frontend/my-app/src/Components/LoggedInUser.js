import React from 'react';

class LoggedInUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isSubscriber: 'false'};
        this.handleClick = this.handleClick.bind(this);
    }
   
   
    
    handleClick() {
        
        //gör en put

        //skicka tillbaks state till parent
        this.props.changeStatus();
         
        


    }


    render() {

        const isSubscriber = this.props.isSubscriber;

        return(
            <div>
            <h1>
                Hej! Du är inloggad. Välkommen att prenumerera på nyhetsbrev! 
            </h1>
            <button onClick= {this.handleClick}>
            {isSubscriber ?  'ON' : 'OFF'}
            </button>
            </div>
        );

    }
}

export default LoggedInUser;

//konstruktor två värden 
//userId och isSubscriber

//state isSubscriber

//props 


//visar en checkbox som är ibockad eller urbockad

