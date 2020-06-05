import React from 'react';

class LoggedInUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ isSubscriber: this.props.isSubscriber});
        //this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange = (event) => {

        
        this.setState({isSubscriber: (this.state.isSubscriber ? false : true)}, () =>
        //this.props.isSubscriber.changeStatus(this.state.isSubscriber));
        console.log("handleChange körs"));
    
        // const isSubscriber = this.props.isSubscriber;

        // const stateToUpdate = event.target.name;
        // this.setState({ [stateToUpdate]: event.target.value })

        // this.props.changeStatus();s

    }
    


    render() {

        const isSubscriber = this.props.isSubscriber;

        return(
            <div>
            <h1>
                Hej! Du är inloggad. Välkommen att prenumerera på nyhetsbrev! 
            </h1>
            <form>
                Jag vill ha nyhetsbrev: 
                <input type="checkbox"
                    onChange={this.handleChange}
                    value={this.state.isSubscriber}
                />
            </form>
            {/* <button onClick= {this.handleClick}
            onChange={this.handleChange}>
            {isSubscriber ?  'ON' : 'OFF'}
            </button> */}
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

